import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IssueList from './components/IssueList';
import SubnavButtonGroup from './components/SubnavButtonGroup';
import NewIssue from './components/NewIssue';

import { DefaultLayout } from "./layouts";

import server, { getIssuesByPage, defaultStateIssueList, addNewIssue, updateIssue } from './util';
import Pagitation from './components/Pagitaion';

function App() {

  const [appLoading, setAppLoading] = useState(true);
  const [issues, setIssues] = useState(defaultStateIssueList());
  const [filter, setFilter] = useState(0);

  const results_length = filter === 0 ? issues.opened_issues : issues.closed_issues;


  function handleSubmit(e, cb) {
    e.preventDefault();
    addNewIssue({
      username: e.target.username.value,
      detail: e.target.detail.value,
      title: e.target.title.value,
      status: e.target.status && e.target.status.value || 0
    }, (err, new_) => {
      console.log(new_);
      if (typeof (cb) === "function") {
        cb.call(this, err, new_);
      }

      // setIssues({
      //   ...issues,
      //   opened_issues: issues.opened_issues + 1,
      //   results: new_issues_list
      // })

      window.location.reload(false);

    })
  }

  console.log("Logging issues", issues);

  function handleSubmitUpdate(e, status, cb) {
    e.preventDefault();

    let id = e.target.issue_id.value;
    alert(status);
    let updated_ = {
      username: e.target.username.value,
      detail: e.target.detail.value,
      title: e.target.title.value,
      status: status,
      created_at: e.target.created_at.value,
    }
    updateIssue(id, updated_, (err, new_) => {
      console.log(new_);
      if (typeof (cb) === "function") {
        cb.call(this, err, new_);
      }

      // setIssues({
      //   ...issues,
      //   results: old_
      // })

      window.location.reload(false);
    })
  }

  function handlePageChange(val = 1, new_filter = filter, cb = null) {
    getIssuesByPage((err, issues) => {
      if (err) {
        console.log("Error", err);
        return;
      }
      if (typeof (cb) === "function") {
        cb.call(this, new_filter);
      }
      setIssues(issues);
      setFilter(new_filter);
      setAppLoading(false);
    }, val, new_filter);
  }

  useEffect(() => {
    setAppLoading(true);
    handlePageChange(1, filter);
  }, []);

  return (
    <DefaultLayout>
      <div className="d-flex flex-justify-between mb-md-3 flex-column-reverse flex-md-row flex-items-end">
        <div className="d-flex flex-justify-start flex-auto width-full my-4 my-md-0" role="search">

          <details className="details-reset details-overlay subnav-search-context" id="filters-select-menu">
            <summary className="btn" aria-haspopup="menu" role="button">
              Filters<span className="dropdown-caret"></span>
            </summary>
            <div className="SelectMenu" role="menu">
              <div className="SelectMenu-modal">
                <div className="SelectMenu-header">
                  <h3 className="SelectMenu-title">Filter Issues</h3>
                  <button className="SelectMenu-closeButton" type="button"
                    data-toggle-for="filters-select-menu">
                    <svg aria-label="Close menu" className="octicon octicon-x" viewBox="0 0 16 16"
                      version="1.1" width="16" height="16" role="img">
                      <path fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z">
                      </path>
                    </svg>
                  </button>
                </div>
                <div className="SelectMenu-list">
                  {/* <a className="SelectMenu-item" role="menuitem"
                    href="/twbs/bootstrap/issues?q=is%3Aopen">
                    Show all</a> */}
                  <a className="SelectMenu-item" role="menuitem"
                    onClick={() => {
                      if (filter === 1) {
                        handlePageChange(1, 0);
                      }
                    }}
                  >
                    Open issues</a>
                  <a className="SelectMenu-item" role="menuitem"
                    onClick={() => {
                      if (filter === 0) {
                        handlePageChange(1, 1);
                      }
                    }}
                  >
                    Closed issues</a>
                  <a className="SelectMenu-item" role="menuitem" target="_blank">
                    <svg className="octicon octicon-link-external mr-2" viewBox="0 0 16 16"
                      version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z">
                      </path>
                    </svg>
                    <strong>View advanced search syntax</strong>
                  </a>
                </div>
              </div>
            </div>
          </details>

          <form className="subnav-search width-full ml-0" data-pjax="true" role="search" aria-label="Issues" accept-charset="UTF-8" method="get"
            onSubmit={(e) => {
              e.preventDefault();
              let q = e.target.q.value;
              if (q.toLowerCase() === "is:open" && filter === 1) {
                handlePageChange(1, 0);
              }
              if (q.toLowerCase() === "is:close" && filter === 0) {
                handlePageChange(1, 1);
              }
            }}
          >
            <input type="text" name="q" id="js-issues-search"
              className="form-control form-control subnav-search-input input-contrast width-full"
              placeholder="Only two query i.e. is:open and is:close" aria-label="Search all issues"
              data-hotkey="Control+/,Meta+/" />
            <svg className="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1"
              width="16" height="16" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z" />
            </svg>
          </form>

          <div className="ml-2 pl-2 d-none d-md-flex">
            <SubnavButtonGroup />
          </div>

        </div>


        <div className="ml-3 d-flex flex-justify-between width-full width-md-auto" data-pjax>
          <span className="d-md-none">
            <SubnavButtonGroup />
          </span>

          <NewIssue handleFormSubmit={handleSubmit} />

        </div>
      </div>

      {appLoading && <div>Loading...</div>}

      {!appLoading && <IssueList list={issues} handlePageChange={handlePageChange} filter={filter} handleFormSubmit={handleSubmitUpdate} />}

      {!appLoading && results_length > 10 && <Pagitation total_issues={results_length} update={handlePageChange} initial_page={1} />}

      {!appLoading &&
        <div class="protip mt-3 mb-5">
          <svg class="octicon octicon-light-bulb text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"></path></svg>
          <strong> GitHUB Issues clone</strong> by <a href="mailto:krupalhp2907@gmail.com">Krupal Panchasara</a>.
      </div>
      }

    </DefaultLayout>

  );
}

export default App;
