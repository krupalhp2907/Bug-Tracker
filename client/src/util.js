function getIssuesByPage(cb, page = 1, filter = 0) {
    const appUri = `http://localhost:5000/list-issues?page=${page}&filter=${filter}`
    fetch(appUri)
        .then(res => res.json())
        .then((values) => {
            cb.call(this, null, values);
        })
        .catch(err => {
            cb.call(this, err, null);
        })
}

function defaultStateIssueList() {
    return {
        opened_issues: 0,
        closed_issues: 0,
        results: []
    }
}

function addNewIssue(e, cb) {
    let { username, title, detail } = e;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, title, detail })
    };
    const postUri = "http://localhost:5000/add-issue";
    fetch(postUri, requestOptions)
        .then(response => response.json())
        .then(data => {
            cb.call(this, null, data);
        })
        .catch(err => {
            cb.call(this, err, null);
        });
}

function pagiDistribution(c, m) {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push(-1);
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}

function sortIssues(list) {
    function helper(a, b) {
        return a.created_at > b.created_at;
    }
    list.sort(helper);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


export default Object.freeze({
    getIssuesByPage,
    defaultStateIssueList,
    addNewIssue,
    pagiDistribution,
    sortIssues,
    getRandomInt
});

export { getIssuesByPage, defaultStateIssueList, addNewIssue, pagiDistribution, sortIssues, getRandomInt };