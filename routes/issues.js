var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var db = require('../db/');
var { body, validationResult } = require('express-validator/check');
var { sanitizeBody } = require('express-validator/filter');

/* GET issues listing. */
router.get('/list-issues', function (req, res, next) {

  function humanTime(created_at) {
    return "20 hours";
  }

  var start = req.query.page, id = req.query.id, filter = req.query.filter, offset = 10;

  if (id) {

    let qget_issue = `select * from issues where issue_id=?`;

    db.query({
      sql: qget_issue,
      timeout: 40000,
      values: [id]
    }, function (errors, results, fields) {
      if (errors) {
        console.log("Error ", errors);
        next(createError(500));
        return;
      }

      res.json(results);
    });

  } else {

    // List of users
    if (!start) start = 1;
    start -= 1;
    if (start <= 0) start = 0;
    start = parseInt(start, 10);
    start = start * offset;

    if (!filter) filter = 0;
    if (!(filter in [0, 1])) {
      filter = 0;
    }

    let qtotal_issues = `select count(issue_id) as issues_count, status from issues group by status`,
      qget_issues = `SELECT * FROM issues where status = ? order by created_at desc limit ?, ?`;


    db.query({
      sql: qtotal_issues,
      timeout: 40000 // 40s
    }, function (errors, results, feilds) {
      if (errors) {
        console.log("Error ", errors);
        next(createError(500));
        return;
      }
      var closed_issues = 0, opened_issues = 0, total_issues = 0;
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        if (obj.status === 0) {
          opened_issues = obj.issues_count;
        } else {
          closed_issues += obj.issues_count;
        }
      }
      total_issues = opened_issues + closed_issues;

      db.query({
        sql: qget_issues,
        timeout: 40000, // 40s
        values: [filter, start, offset]
      }, function (errors, results, feilds) {
        if (errors) {
          console.log("Error ", errors);
          next(createError(500));
          return;
        }


        let processed_results = {
          opened_issues,
          closed_issues,
          results,
        };

        res.json(processed_results);
      });
    });
  }
});

/* Insert new Issues */
router.post('/add-issue', [

  body('title')
    .trim()
    .isLength({ min: 2, max: 255 }).withMessage("Length of title should be more then 2 and less then 255")
    .isString().withMessage("Title should be string"),

  body('username')
    .trim(),

  body('detail')
    .trim()
    .isLength({ min: 10, max: 7000 }).withMessage("Write some more descriptive report for your bug")

], function (req, res, next) {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, detail, username } = req.body;

  db.query({
    sql: 'INSERT INTO issues(title, detail, username) values(?, ?, ?)',
    timeout: 40000, // 40s
    values: [title, detail, username]
  }, function (errors, results, feilds) {
    if (errors) {
      next(createError(500));
      return;
    }
    let new_ = {
      title,
      detail,
      username,
      created_at: new Date(),
      modified_at: new Date(),
      issue_id: results.insertId,
      datetostring: "20 hours"
    }
    res.json(new_);
  });
});

/* Update Issue */
router.put('/update-issue', [

  body('title')
    .trim()
    .escape()
    .isLength({ min: 2, max: 255 }).withMessage("Length of title should be more then 2 and less then 255")
    .isString().withMessage("Title should be string"),

  body('detail')
    .trim()
    .escape()
    .isLength({ min: 10, max: 7000 }).withMessage("Write some more descriptive report for your bug")

], function (req, res, next) {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  var id = req.query.id;
  var status = req.body.status;
  if (!status) status = 0;

  db.query({
    sql: 'UPDATE issues set title = ?, detail = ?, status = ? where issue_id = ?',
    timeout: 40000, // 40s
    values: [req.body.title, req.body.detail, status, id]
  }, function (errors, results, feilds) {
    if (errors) {
      console.log("Error ", errors);
      next(createError(500));
      return;
    }
    res.json(results);
  });
});


/* Delete Issue */
router.delete('/delete-issue', function (req, res, next) {

  var id = req.query.id;

  db.query({
    sql: 'DELETE FROM issues WHERE issue_id = ?',
    timeout: 40000, // 40s
    values: [id]
  }, function (errors, results, feilds) {
    if (errors) {
      console.log("Error ", errors);
      next(createError(500));
      return;
    }
    res.send(results);
  });

});

module.exports = router;
