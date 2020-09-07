import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IssueListItem from './IssueListItem';

import { defaultStateIssueList } from "../util";

function Status({ open, close, filter, handlePageChange }) {

    return (
        <div className="table-list-header-toggle states flex-auto pl-0">
            <a className={`btn-link ${filter === 0 ? "selected" : ""}`}
                onClick={() => {
                    if (filter == 1) {
                        handlePageChange(1, 0);
                    }
                }}
            >
                <svg className="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16"
                    height="16" aria-hidden="true">
                    <path fillRule="evenodd"
                        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                </svg>
                {open} Open
            </a>

            <a className={`btn-link ${filter === 1 ? "selected" : ""}`}
                onClick={() => {
                    if (filter == 0) {
                        handlePageChange(1, 1);
                    }
                }}
            >
                <svg className="octicon octicon-check" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                    aria-hidden="true">
                    <path fillRule="evenodd"
                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                {close} Closed
            </a>
        </div>
    );
}

Status.prototype = {
    /**
     * Validation for open
     */
    open: PropTypes.number,
    /**
     * Validation for open
     */
    close: PropTypes.number,
    /**
     * Validation for handle page change
     */
    handlePageChange: PropTypes.func,
    /**
     * Validation for Filter
     */
    handlePageChange: PropTypes.func
}

function NavAttribute({ title, styles }) {
    return (
        <div className={styles}>
            <summary className="btn-link" title="Label">
                {title} <span className="dropdown-caret hide-sm"></span>
            </summary>
        </div>
    );
}

NavAttribute.prototype = {
    /**
     * Validation for title
     */
    title: PropTypes.string,
    /**
     * Validation for styles
     */
    styles: PropTypes.string
}


function NoIssue({ open, close, filter }) {
    let header = "Welcome to issues!", desc = 'Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should <a href="#">create an issue</a>.';
    if (close != 0 && open == 0 && filter === 0) {
        header = "There aren’t any open issues.";
        desc = "You could search all of <a href='#'>GitHub</a> or try an <a href='#'>advanced search.</a>";
    } else if (close == 0 && open != 0 && filter === 1) {
        header = "There aren’t any close issues.";
    }
    let visible = false;
    if (filter === 0) {
        if (open === 0) visible = true;
    }
    if (filter === 1) {
        if (close === 0) visible = true;
    }
    return (
        <>
            {visible && <div class="blankslate blankslate-spacious blankslate-large border-0">
                <div class="container-md">
                    <svg height="40" class="octicon octicon-issue-opened blankslate-icon" viewBox="0 0 24 24" version="1.1" width="40" aria-hidden="true"><path d="M12 7a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7zm1 9a1 1 0 11-2 0 1 1 0 012 0z"></path><path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                    <h3 >{header}</h3>
                    <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                </div>
                <div></div></div>}
        </>
    );
}

NoIssue.prototype = {
    /**
     * Validation for open
     */
    open: PropTypes.number,
    /**
     * Validation for open
     */
    close: PropTypes.number
}


function IssueList({ list, handlePageChange, filter, handleFormSubmit }) {
    let issues_ = list;
    if (list == {}) {
        issues_ = defaultStateIssueList();
    }
    let opened_issues = issues_.opened_issues, closed_issues = issues_.closed_issues, results_issues = issues_.results;
    let issues = issues_['results'];

    console.log("IssueList", handlePageChange);

    return (
        <>
            {/* For mobile view */}
            <div className="d-block d-lg-none no-wrap">
                <Status
                    open={opened_issues}
                    close={closed_issues}
                    handlePageChange={handlePageChange}
                    filter={filter}
                />
            </div>

            <div className="Box mt-3 Box--responsive hx_Box--firstRowRounded0">

                <div className="Box-header d-flex flex-justify-between" id="js-issues-toolbar">



                    <div className="table-list-filters flex-auto d-flex min-width-0">




                        {/* For Large Screen View, */}
                        <div className="flex-auto d-none d-lg-block no-wrap">
                            <Status
                                open={opened_issues}
                                close={closed_issues}
                                handlePageChange={handlePageChange}
                                filter={filter}

                            />
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
                                >
                                    <div className="SelectMenu-modal">
                                        <header className="SelectMenu-header">
                                            <span className="SelectMenu-title">Filter by author</span>
                                            <button className="SelectMenu-closeButton" type="button"
                                                data-toggle-for="author-select-menu">
                                                <svg aria-label="Close menu" className="octicon octicon-x"
                                                    viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
                                                    <path fillRule="evenodd"
                                                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
                                                </svg>
                                            </button>
                                        </header>
                                        <div className="SelectMenu-filter">
                                            <input className="SelectMenu-input form-control js-filterable-field"
                                                id="author-filter-field" type="text" placeholder="Filter users"
                                                aria-label="Filter users" autoComplete="off" spellCheck="false"
                                                autoFocus />
                                        </div>
                                        <div className="SelectMenu-list select-menu-list" data-filter="author">
                                            <div data-filterable-for="author-filter-field"
                                                data-filterable-type="substring">
                                                <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                                                    href="#">
                                                    <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                        viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                        aria-hidden="true">
                                                        <path fillRule="evenodd"
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
                                                    href="#">
                                                    <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                        viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                        aria-hidden="true">
                                                        <path fillRule="evenodd"
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
                                                    href="#">
                                                    <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                        viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                        aria-hidden="true">
                                                        <path fillRule="evenodd"
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
                                                acceptCharset="UTF-8" method="get">
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

                            <NavAttribute
                                styles="d-inline-block position-relative px-3"
                                title="Labels"
                            />
                            <NavAttribute
                                styles="position-relative px-3 d-md-inline-block d-none"
                                title="Projects"
                            />
                            <NavAttribute
                                styles="position-relative px-3 d-md-inline-block d-none"
                                title="Milestones"
                            />
                            <NavAttribute
                                styles="d-inline-block position-relative px-3"
                                title="Assignee"
                            />


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
                                                    <path fillRule="evenodd"
                                                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
                                                </svg>
                                            </button>
                                        </header>

                                        <div className="SelectMenu-list">
                                            <a className="SelectMenu-item" aria-checked="true" role="menuitemradio"
                                                href="#">
                                                <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                    viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                    aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                                                </svg>
                                                <span>Newest</span>
                                            </a>
                                            <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                                                href="#">
                                                <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                    viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                    aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                                                </svg>
                                                <span>Oldest</span>
                                            </a>
                                            <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                                                href="#">
                                                <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                    viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                    aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                                                </svg>
                                                <span>Recently updated</span>
                                            </a>
                                            <a className="SelectMenu-item" aria-checked="false" role="menuitemradio"
                                                href="#">
                                                <svg className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
                                                    viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                                    aria-hidden="true">
                                                    <path fillRule="evenodd"
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


                        <NoIssue open={opened_issues} close={closed_issues} filter={filter} />

                        {
                            issues.map((value, index) => {
                                return (
                                    <IssueListItem
                                        key={index}
                                        issue_id={value.issue_id}
                                        title={value.title}
                                        detail={value.detail}
                                        status={value.status}
                                        username={value.username}
                                        filter={filter}
                                        created_at={value.created_at}
                                        modified_at={value.modified_at}
                                        handleFormSubmit={handleFormSubmit}
                                    />
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

IssueList.prototype = {
    /**
     * Validate list
     */
    list: PropTypes.object,
    /**
     * Validate list
     */
    handlePageChange: PropTypes.func
}

IssueList.default = {
    list: defaultStateIssueList()

}

export default IssueList;