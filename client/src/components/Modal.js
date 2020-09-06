import React from 'react';

function Modal() {
    return (
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
                        <a className="SelectMenu-item" role="menuitem"
                            href="/twbs/bootstrap/issues?q=is%3Aopen">
                            Show all</a>
                        <a className="SelectMenu-item" role="menuitem"
                            href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue+author%3A%40me">
                            Open issues</a>
                        <a className="SelectMenu-item" role="menuitem"
                            href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Apr+author%3A%40me">
                            Closed issues</a>
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
    );
}

function MyModal() {
    return (
        <details className="details-reset details-overlay" id="filters-select-menu">
            <summary className="btn" aria-haspopup="menu" role="button">
                Filters<span className="dropdown-caret"></span>
            </summary>
            <div className="SelectMenu" role="menu">
                <div className="SelectMenu-list">
                    <a className="SelectMenu-item" role="menuitem"
                        href="/twbs/bootstrap/issues?q=is%3Aopen">
                        Show all</a>
                    <a className="SelectMenu-item" role="menuitem"
                        href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Aissue+author%3A%40me">
                        Open issues</a>
                    <a className="SelectMenu-item" role="menuitem"
                        href="/twbs/bootstrap/issues?q=is%3Aopen+is%3Apr+author%3A%40me">
                        Closed issues</a>
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
        </details>

    );
}

export default Modal;