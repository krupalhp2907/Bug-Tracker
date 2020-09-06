import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="container-xl clearfix new-discussion-timeline  px-3 px-md-4 px-lg-5 mt-3">
      <div className="repository-content ">

        <div className="js-check-all-container" data-pjax>


          <div className="d-flex flex-justify-between mb-md-3 flex-column-reverse flex-md-row flex-items-end">
            <div className="d-flex flex-justify-start flex-auto width-full my-4 my-md-0" role="search">

              <details className="details-reset details-overlay subnav-search-context" id="filters-select-menu">
                <summary className="btn" aria-haspopup="menu" role="button">
                  Filters
                            <span className="dropdown-caret"></span>
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
                      <a className="SelectMenu-item" role="menuitem"
                        href="/twbs/bootstrap/issues?q=is%3Aopen">
                        Show all
                                    </a>
                      <a className="SelectMenu-item" role="menuitem"
                        href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue+author%3A%40me">
                        Open issues
                                    </a>
                      <a className="SelectMenu-item" role="menuitem"
                        href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Apr+author%3A%40me">
                        Closed issues
                                    </a>
                      <a className="SelectMenu-item" role="menuitem"
                        href="https://docs.github.com/articles/searching-issues" target="_blank">
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

              <form className="subnav-search width-full ml-0" data-pjax="true" role="search" aria-label="Issues"
                action="/twbs/bootstrap/issues" accept-charset="UTF-8" method="get">
                <input type="text" name="q" id="js-issues-search" value="is:issue is:open "
                  className="form-control form-control subnav-search-input input-contrast width-full"
                  placeholder="Search all issues" aria-label="Search all issues"
                  data-hotkey="Control+/,Meta+/" />
                <svg className="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1"
                  width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z" />
                </svg>
              </form>

              <div className="ml-2 pl-2 d-none d-md-flex">

                <nav className="subnav-links float-left d-flex no-wrap" aria-label="Issue">
                  <a selected_link="repo_issues" className="js-selected-navigation-item subnav-item" href="#">
                    <svg className="octicon octicon-tag" viewBox="0 0 16 16" version="1.1" width="16"
                      height="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z" />
                    </svg> Labels <span title="45" className="Counter d-none d-md-inline">45</span>
                  </a> <a selected_link="repo_issues" className="js-selected-navigation-item subnav-item"
                    href="#">
                    <svg className="octicon octicon-milestone" viewBox="0 0 16 16" version="1.1" width="16"
                      height="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z" />
                    </svg> Milestones <span title="0" className="Counter d-none d-md-inline">0</span>
                  </a>
                </nav>

              </div>
            </div>
            <div className="ml-3 d-flex flex-justify-between width-full width-md-auto" data-pjax>
              <span className="d-md-none">

                <nav className="subnav-links float-left d-flex no-wrap" aria-label="Issue">
                  <a selected_link="repo_issues" className="js-selected-navigation-item subnav-item"
                    href="/twbs/bootstrap/labels">
                    <svg className="octicon octicon-tag" viewBox="0 0 16 16" version="1.1" width="16"
                      height="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z" />
                    </svg> Labels <span title="45" className="Counter d-none d-md-inline">45</span>
                  </a> <a selected_link="repo_issues" className="js-selected-navigation-item subnav-item"
                    href="/twbs/bootstrap/milestones">
                    <svg className="octicon octicon-milestone" viewBox="0 0 16 16" version="1.1" width="16"
                      height="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z" />
                    </svg> Milestones <span title="0" className="Counter d-none d-md-inline">0</span>
                  </a></nav>

              </span>

              <details className="details-reset details-overlay details-overlay-dark float-right">
                <summary className="btn btn-primary" role="button">
                  New issue
                </summary>
                <details-dialog className="Box Box--overlay d-flex flex-column anim-fade-in fast overflow-auto"
                  aria-label="Sign up for GitHub" role="dialog" aria-modal="true">
                  <button className="position-absolute p-4 right-0 btn-link muted-link" type="button"
                    aria-label="Close dialog" data-close-dialog>
                    <svg className="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16"
                      height="16" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
                    </svg>
                  </button>
                  <div className="d-flex flex-column p-4">
                    <div className="mt-3 mb-2 text-center">
                      <svg height="60" className="octicon octicon-comment-discussion text-blue"
                        viewBox="0 0 24 24" version="1.1" width="60" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M1.75 1A1.75 1.75 0 000 2.75v9.5C0 13.216.784 14 1.75 14H3v1.543a1.457 1.457 0 002.487 1.03L8.061 14h6.189A1.75 1.75 0 0016 12.25v-9.5A1.75 1.75 0 0014.25 1H1.75zM1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v9.5a.25.25 0 01-.25.25h-6.5a.75.75 0 00-.53.22L4.5 15.44v-2.19a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-9.5z" />
                        <path
                          d="M22.5 8.75a.25.25 0 00-.25-.25h-3.5a.75.75 0 010-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0122.25 20H21v1.543a1.457 1.457 0 01-2.487 1.03L15.939 20H10.75A1.75 1.75 0 019 18.25v-1.465a.75.75 0 011.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 01.53.22l2.72 2.72v-2.19a.75.75 0 01.75-.75h2a.25.25 0 00.25-.25v-9.5z" />
                      </svg>
                    </div>

                    <div className="px-4">
                      <p className="text-center mb-4">
                        <strong>Encountered any issue ?</strong> Feel free to write up to us. Your
                                        issue would be tested by our developer and will be removed if it's valid
                                    </p>

                      <form className="js-signup-form" autocomplete="off"
                        action="/join?return_to=%2Ftwbs%2Fbootstrap%2Fissues%2Fnew"
                        accept-charset="UTF-8" method="post">

                        <auto-check src="/signup_check/username">
                          <dl className="form-group">
                            <dt className="input-label"><label name="user[login]"
                              autocapitalize="off" autofocus="autofocus"
                              for="user_login_issues">Pick a username</label></dt>
                            <dd><input name="user[login]" autocapitalize="off" autofocus="autofocus"
                              className="form-control" type="text" id="user_login_issues"
                              autocomplete="off" spellcheck="false" /></dd>
                          </dl>

                        </auto-check>

                        <auto-check src="/users/password">
                          <dl className="form-group">
                            <dt className="input-label"><label name="user[detail]"
                              for="user_issues">Issue report</label></dt>
                            <dd><textarea name="comment[body]" id="new_comment_field"
                              placeholder="Leave a comment" aria-label="Comment body"
                              className="form-control input-contrast comment-form-textarea js-comment-field js-paste-markdown js-task-list-field js-quick-submit js-size-to-fit js-session-resumable js-saved-reply-shortcut-comment-field"
                              required=""></textarea>
                            </dd>
                          </dl>
                        </auto-check>

                        <button className="btn btn-primary mt-3 btn-block" type="submit">
                          Submit
                          your
                          Issue</button>
                      </form>
                      <p className="mt-4 text-gray text-center">We'll be using cookies to store your
                      name.
                      Read our
                      <a href="https://docs.github.com/terms" target="_blank">cookies policy</a>.</p>
                    </div>

                  </div>
                </details-dialog>
              </details>
            </div>
          </div>



          <div className="d-block d-lg-none no-wrap">

            <div className="table-list-header-toggle states flex-auto pl-0">
              <a href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue" className="btn-link selected">
                <svg className="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16"
                  height="16" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                </svg>
                        344 Open
                    </a>

              <a href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aclosed" className="btn-link ">
                <svg className="octicon octicon-check" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                        19,212 Closed
                    </a>
            </div>

          </div>

          <div className="Box mt-3 Box--responsive hx_Box--firstRowRounded0">
            <div className="Box-header d-flex flex-justify-between" id="js-issues-toolbar">

              <div className="table-list-filters flex-auto d-flex min-width-0">
                <div className="flex-auto d-none d-lg-block no-wrap">

                  <div className="table-list-header-toggle states flex-auto pl-0">
                    <a href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue" className="btn-link selected">
                      <svg className="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1"
                        width="16" height="16" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                      </svg>
                                    344 Open
                                </a>

                    <a href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aclosed" className="btn-link ">
                      <svg className="octicon octicon-check" viewBox="0 0 16 16" version="1.1" width="16"
                        height="16" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                                    19,212 Closed
                                </a>
                  </div>

                </div>

                <div
                  className="table-list-header-toggle no-wrap d-flex flex-auto flex-justify-between flex-sm-justify-start flex-lg-justify-end">

                  <details className="details-reset details-overlay d-inline-block position-relative px-3"
                    id="author-select-menu">
                    <summary className="btn-link" title="Author" data-hotkey="u" aria-haspopup="menu"
                      role="button">
                      Author <span className="dropdown-caret hide-sm"></span>
                    </summary>
                    <div className="SelectMenu SelectMenu--hasFilter right-0" role="menu"
                      src="/twbs/bootstrap/issues/show_menu_content?partial=issues%2Ffilters%2Fauthors_content&amp;q=is%3Aissue+is%3Aopen"
                      preload>
                      <div className="SelectMenu-modal">
                        <header className="SelectMenu-header">
                          <span className="SelectMenu-title">Filter by author</span>
                          <button className="SelectMenu-closeButton" type="button"
                            data-toggle-for="author-select-menu">
                            <svg aria-label="Close menu" className="octicon octicon-x"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
                              <path fill-rule="evenodd"
                                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
                            </svg>
                          </button>
                        </header>
                        <div className="SelectMenu-filter">
                          <input className="SelectMenu-input form-control js-filterable-field"
                            id="author-filter-field" type="text" placeholder="Filter users"
                            aria-label="Filter users" autocomplete="off" spellcheck="false"
                            autofocus />
                        </div>
                        <div className="SelectMenu-list select-menu-list" data-filter="author">
                          <div data-filterable-for="author-filter-field"
                            data-filterable-type="substring">
                            <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                              href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue+author%3Akrupalhp2907">
                              <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z">
                                </path>
                              </svg>
                              <img className="avatar mr-2 avatar-user"
                                src="https://avatars3.githubusercontent.com/u/57654720?s=40&amp;v=4"
                                alt="@krupalhp2907" width="20" height="20" />
                              <strong className="mr-2">krupalhp2907</strong>
                              <span className="text-gray-light"></span>
                            </a>
                            <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                              href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue+author%3Aandresgalante">
                              <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z">
                                </path>
                              </svg>
                              <img className="avatar mr-2 avatar-user"
                                src="https://avatars2.githubusercontent.com/u/1832037?s=40&amp;v=4"
                                alt="@andresgalante" width="20" height="20" />
                              <strong className="mr-2">andresgalante</strong>
                              <span className="text-gray-light">Andres Galante</span>
                            </a>
                            <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                              href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue+author%3Abardiharborow">
                              <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                  d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z">
                                </path>
                              </svg>
                              <img className="avatar mr-2 avatar-user"
                                src="https://avatars0.githubusercontent.com/u/1073681?s=40&amp;v=4"
                                alt="@bardiharborow" width="20" height="20" />
                              <strong className="mr-2">bardiharborow</strong>
                              <span className="text-gray-light">Bardi Harborow</span>
                            </a>
                          </div>

                          <form className="select-menu-new-item-form js-new-item-form"
                            action="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue"
                            accept-charset="UTF-8" method="get">
                            <button className="SelectMenu-item d-block js-new-item-value"
                              type="submit" name="author" role="menuitem">
                              <div className="text-bold f5">author:<span
                                className="js-new-item-name"></span></div>
                              <div className="text-gray-light">Filter by this user</div>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </details>


                  <div className="d-inline-block position-relative px-3">
                    <summary className="btn-link" title="Label">
                      Label <span className="dropdown-caret hide-sm"></span>
                    </summary>
                  </div>

                  <div className="position-relative px-3 d-md-inline-block d-none">
                    <summary className="btn-link" title="Label">
                      Projects <span className="dropdown-caret hide-sm"></span>
                    </summary>
                  </div>

                  <div className="position-relative px-3 d-md-inline-block d-none">
                    <summary className="btn-link" title="Label">
                      Milestones  <span className="dropdown-caret hide-sm"></span>
                    </summary>
                  </div>

                  <div className="d-inline-block position-relative px-3">
                    <summary className="btn-link" title="Label">
                      Assignee <span className="dropdown-caret hide-sm"></span>
                    </summary>
                  </div>

                  <details
                    className="details-reset details-overlay d-inline-block position-relative pr-3 pr-sm-0 px-3"
                    id="sort-select-menu">
                    <summary className="btn-link" title="Sort" aria-haspopup="menu" role="button">
                      Sort<span></span> <span className="dropdown-caret hide-sm"></span>
                    </summary>
                    <div className="SelectMenu SelectMenu--hasFilter right-0" role="menu"
                      aria-label="Sort by">
                      <div className="SelectMenu-modal">
                        <header className="SelectMenu-header">
                          <span className="SelectMenu-title">Sort by</span>
                          <button className="SelectMenu-closeButton" type="button"
                            data-toggle-for="sort-select-menu">
                            <svg aria-label="Close menu" className="octicon octicon-x"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
                              <path fill-rule="evenodd"
                                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
                            </svg>
                          </button>
                        </header>

                        <div className="SelectMenu-list">
                          <a className="SelectMenu-item" aria-checked="true" role="menuitemradio"
                            href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue">
                            <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16"
                              aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                            </svg>
                            <span>Newest</span>
                          </a>
                          <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                            href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc">
                            <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16"
                              aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                            </svg>
                            <span>Oldest</span>
                          </a>
                          <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                            href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">
                            <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16"
                              aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                            </svg>
                            <span>Recently updated</span>
                          </a>
                          <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                            href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc">
                            <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16"
                              aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                            </svg>
                            <span>Least recently updated</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </details>

                </div>
              </div>

            </div>

            <div aria-label="Issues" role="group" data-issue-and-pr-hovercards-enabled>
              <div className="js-navigation-container js-active-navigation-container">

                <div id="issue_31603"
                  className="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row"
                  data-id="693880071">
                  <div className="d-flex Box-row--drag-hide position-relative">


                    <div className="flex-shrink-0 pt-2 pl-3">
                      <span className="tooltipped tooltipped-e" aria-label="Open issue">
                        <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16"
                          version="1.1" width="16" height="16" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                        </svg>
                      </span>
                    </div>

                    <div className="flex-auto min-width-0 p-2 pr-3 pr-md-2">

                      <a id="issue_31603_link"
                        className="link-gray-dark v-align-middle no-underline h4 js-navigation-open"
                        href="/twbs/bootstrap/issues/31603">[reboot] button: border-radius: 0;
                        destroys native
                                        styling</a>
                      <div className="mt-1 text-small text-gray">
                        <span className="opened-by">
                          #31603
                                            opened <relative-time datetime="2020-09-05T01:11:19Z" className="no-wrap"
                            title="5 Sep 2020, 06:41 GMT+5:30">20 hours ago
                                            </relative-time> by
                                            <a className="muted-link" title="Open issues created by leeoniya"
                            data-octo-click="hovercard-link-click"
                            data-octo-dimensions="link_type:self"
                            href="/twbs/bootstrap/issues?q=is%3Aissue+is%3Aopen+author%3Aleeoniya">leeoniya</a>
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 col-3 pt-2 text-right pr-3 no-wrap d-flex hide-sm ">

                      <span className="ml-2 flex-1 flex-shrink-0">
                        <span
                          className="tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
                          aria-label="9 linked pull requests">
                          <span className="text-gray" aria-label="9 pull requests">
                            <svg className="octicon octicon-git-pull-request v-align-middle"
                              viewBox="0 0 16 16" version="1.1" width="16" height="16"
                              aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z">
                              </path>
                            </svg>
                            <span className="text-small text-bold">9 </span>
                          </span>
                        </span>
                      </span>

                      <span className="ml-2 flex-1 flex-shrink-0">
                        <div className="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
                          <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
                            aria-label="Assigned to krupalhp2907">

                            <a className="avatar avatar-user"
                              aria-label="krupalhp2907’s assigned issues"
                              href="/krupalhp2907/Smart-Attendance-System/issues?q=assignee%3Akrupalhp2907+is%3Aopen">
                              <img className="from-avatar avatar-user"
                                src="https://avatars3.githubusercontent.com/u/57654720?s=40&amp;v=4"
                                alt="@krupalhp2907" width="20" height="20" />
                            </a> </div>
                        </div>
                      </span>

                      <span className="ml-2 flex-1 flex-shrink-0">
                        <a href="/krupalhp2907/Smart-Attendance-System/issues/11" className="muted-link"
                          aria-label="2 comments">
                          <svg className="octicon octicon-comment v-align-middle" viewBox="0 0 16 16"
                            version="1.1" width="16" height="16" aria-hidden="true">
                            <path fill-rule="evenodd"
                              d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z">
                            </path>
                          </svg>
                          <span className="text-small text-bold">2</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="paginate-container d-none d-sm-flex flex-sm-justify-center">
            <div role="navigation" aria-label="Pagination" className="pagination"><span
              className="previous_page disabled">Previous</span> <em className="current"
                data-total-pages="14">1</em>
              <a rel="next" aria-label="Page 2"
                href="/twbs/bootstrap/issues?page=2&amp;q=is%3Aissue+is%3Aopen">2</a>
              <a aria-label="Page 3" href="/twbs/bootstrap/issues?page=3&amp;q=is%3Aissue+is%3Aopen">3</a> <a
                aria-label="Page 4" href="/twbs/bootstrap/issues?page=4&amp;q=is%3Aissue+is%3Aopen">4</a> <a
                  aria-label="Page 5" href="/twbs/bootstrap/issues?page=5&amp;q=is%3Aissue+is%3Aopen">5</a>
              <span className="gap">…</span> <a aria-label="Page 13"
                href="/twbs/bootstrap/issues?page=13&amp;q=is%3Aissue+is%3Aopen">13</a> <a aria-label="Page 14"
                  href="/twbs/bootstrap/issues?page=14&amp;q=is%3Aissue+is%3Aopen">14</a>
              <a className="next_page" rel="next"
                href="/twbs/bootstrap/issues?page=2&amp;q=is%3Aissue+is%3Aopen">Next</a></div>
          </div>

          <div className="paginate-container d-sm-none mb-5">
            <div role="navigation" aria-label="Pagination" className="pagination">
              <span className="previous_page disabled">Previous</span>
              <a className="next_page" rel="next" href="/twbs/bootstrap/issues?page=2&amp;q=is%3Aissue+is%3Aopen">
                Next
                    </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
