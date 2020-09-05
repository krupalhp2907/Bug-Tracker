var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var db = require('../db/');
var { body, validationResult } = require('express-validator/check');
var { sanitizeBody } = require('express-validator/filter');

/* GET issues listing. */
router.get('/list-issues', function (req, res, next) {

  var start = req.query.page, id = req.query.id;

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
      res.send(results);
    });

  } else {

    // List of users
    if (!start) start = 0;
    start = parseInt(start, 10);

    let qtotal_issues = `select count(issue_id) as total_issues from issues`,
      qget_issues = `SELECT * FROM issues limit ?, ?`;


    db.query({
      sql: qtotal_issues,
      timeout: 40000 // 40s
    }, function (errors, results, feilds) {
      if (errors) {
        console.log("Error ", errors);
        next(createError(500));
        return;
      }
      var total_issues = results[0].total_issues;
      if (start > total_issues) start = 0;

      db.query({
        sql: qget_issues,
        timeout: 40000, // 40s
        values: [start, start + 10]
      }, function (errors, results, feilds) {
        if (errors) {
          console.log("Error ", errors);
          next(createError(500));
          return;
        }
        res.send(results);
      });
    });
  }
});

/* Insert new Issues */
router.post('/add-issue', [

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

  db.query({
    sql: 'INSERT INTO issues(title, detail) values(?, ?)',
    timeout: 40000, // 40s
    values: [db.escape(req.body.title), db.escape(req.body.detail)]
  }, function (errors, results, feilds) {
    if (errors) {
      console.log("Error ", errors);
      next(createError(500));
      return;
    }
    console.log(results);
    res.send(results);
  });
});

/* Update Issue */
router.post('/update-issue', [

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

  db.query({
    sql: 'UPDATE issues set title = ?, detail = ? where issue_id = ?',
    timeout: 40000, // 40s
    values: [req.body.title, req.body.detail, id]
  }, function (errors, results, feilds) {
    if (errors) {
      console.log("Error ", errors);
      next(createError(500));
      return;
    }
    console.log(results);
    res.send(results);
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
    console.log(results);
    res.send(results);
  });

});

module.exports = router;
