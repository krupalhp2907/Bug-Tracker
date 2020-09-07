import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRandomInt } from "../util";

function IssueListItem({ issue_id, detail: _detail, title: _title, status: _status = 0, username = "anonymous", filter = 0, handleFormSubmit, created_at, modified_at }) {
    console.log(created_at, modified_at);
    var issue_id_string = `issue_${issue_id}`;
    var target_route = `http://localhost:3000/list-issues?id=${issue_id}`;
    target_route = "#"

    if (username === "") username = "anonymous";
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState(_title);
    const [detail, setDetail] = useState(_detail);
    const [status, setStatus] = useState(_status);

    var status_string = _status == 0 ? 'opened' : 'closed';

    let btnRef = useRef();

    function handleFormSubmit_(e) {
        e.preventDefault();
        if (btnRef.current) {
            btnRef.current.setAttribute("disabled", "disabled");
        }
        setIsLoading(true);
        handleFormSubmit(e, status, (err, new_) => {
            setIsLoading(false);
            btnRef.current.removeAttribute("disabled");
        });
    }

    return (
        <>
            <div id={issue_id_string}
                className="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row">

                <div className="d-flex Box-row--drag-hide position-relative">
                    <div className="flex-shrink-0 pt-2 pl-3">
                        <span className="tooltipped tooltipped-e" aria-label="Open issue">
                            {
                                filter === 0 ?
                                    <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16"
                                        version="1.1" width="16" height="16" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                                    </svg> :
                                    <svg class="octicon octicon-issue-closed closed" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"></path></svg>
                            }
                        </span>
                    </div>

                    <div className="flex-auto min-width-0 p-2 pr-3 pr-md-2">

                        <details id={`${issue_id_string}_link`}
                            className="details-reset details-overlay details-overlay-dark"
                            href={target_route}
                        >

                            <summary className="link-gray-dark v-align-middle no-underline h4 js-navigation-open">
                                {title}
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
                                            <strong>You can edit any issue.</strong> This hits the edit route as
                                            described in assessment. No security is provided anyone can edit any open issue.
                                        </p>

                                        <form className="js-signup-form" autocomplete="off"
                                            accept-charset="UTF-8" method="post"
                                            onSubmit={handleFormSubmit_}
                                        >
                                            <p className="text-center mb-4">Issue created <strong>20 hours</strong> ago and last modified <strong>13 hours</strong> ago.</p>
                                            <input type="hidden" name="issue_id" value={issue_id} />

                                            <input type="hidden" name="created_at" value={created_at} />

                                            <dl className="form-group">
                                                <dt className="input-label"><label name="username"
                                                    autocapitalize="off" autofocus="autofocus"
                                                    for="user_username">Issue submitted by</label></dt>
                                                <dd><input name="username" autocapitalize="off" autofocus="autofocus"
                                                    className="form-control" type="text" id="user_username"
                                                    autocomplete="off" spellcheck="false" placeholder="Can be empty. Just for demo."
                                                    disabled={true}
                                                    value={username}
                                                /></dd>
                                            </dl>


                                            <dl className="form-group">
                                                <dt className="input-label"><label name="title"
                                                    autocapitalize="off" autofocus="autofocus"
                                                    for="issue_title">Issue Title</label></dt>
                                                <dd><input name="title" autocapitalize="off" autofocus="autofocus"
                                                    className="form-control" type="text" id="issue_title"
                                                    autocomplete="off" spellcheck="false" placeholder="Issue title should be more then 2 and less then 255 characters."
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                /></dd>
                                            </dl>

                                            <dl className="form-group">
                                                <dt className="input-label"><label name="detail"
                                                    for="issue_detail">Issue report</label></dt>
                                                <dd><textarea name="detail" id="issue_detail"
                                                    placeholder="Issue report should be descriptive i.e more then 10 letters" aria-label="Comment body"
                                                    className="form-control input-contrast comment-form-textarea js-comment-field js-paste-markdown js-task-list-field js-quick-submit js-size-to-fit js-session-resumable js-saved-reply-shortcut-comment-field"
                                                    required=""
                                                    value={detail}
                                                    onChange={(e) => setDetail(e.target.value)}
                                                ></textarea>
                                                </dd>
                                            </dl>

                                            <dl className="form-group">
                                                <dt className="input-label"><label name="detail"
                                                    for="issue_status">Issue report</label></dt>
                                                <dd>
                                                    <select className="width-100 form-select" id="issue_status" style={{ "cursor": "pointer" }}
                                                        onChange={(e) => setStatus(e.target.value)}
                                                        name="status"
                                                    >
                                                        <option selected={filter == 1 ? "selected" : ""} value="1">Close</option>
                                                        <option selected={filter == 0 ? "selected" : ""} value="0">Open</option>

                                                    </select>
                                                </dd>
                                            </dl>


                                            <button ref={btnRef} className={`btn btn-primary mt-3 btn-block ${isLoading === true ? "disabled" : ""}`} type="submit"
                                                id="close_button"
                                            >
                                                {isLoading === false ? "Save Changes" : "Saving Changes..."}
                                            </button>
                                        </form>

                                        <p className="mt-4 text-gray text-center">We'll be using cookies to store your
                                        name.
                        Read our <a href="https://docs.github.com/terms" target="_blank">cookies policy</a>.</p>
                                    </div>

                                </div>
                            </details-dialog>

                        </details>
                        <div className="mt-1 text-small text-gray">
                            <span className="opened-by">
                                #{issue_id} {status_string} <relative-time datetime="2020-09-05T01:11:19Z" className="no-wrap"
                                    title="5 Sep 2020, 06:41 GMT+5:30">20 hours ago
                                </relative-time> by <a className="muted-link" title="Open issues created by leeoniya"
                                    data-octo-click="hovercard-link-click"
                                    data-octo-dimensions="link_type:self"
                                    href="#">{username}</a>
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
                                    <span className="text-small text-bold"> {getRandomInt(15)}</span>
                                </span>
                            </span>
                        </span>

                        <span className="ml-2 flex-1 flex-shrink-0">
                            <div className="AvatarStack AvatarStack--right ml-2 flex-1 flex-shrink-0 ">
                                <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1"
                                    aria-label="Assigned to krupalhp2907">

                                    <a className="avatar avatar-user"
                                        aria-label="krupalhp2907’s assigned issues"
                                        href="#">
                                        <img className="from-avatar avatar-user"
                                            src="https://avatars3.githubusercontent.com/u/57654720?s=40&amp;v=4"
                                            alt="@krupalhp2907" width="20" height="20" />
                                    </a>

                                    {
                                        getRandomInt(5) === 0 ?
                                            <a className="avatar avatar-user" href="#"
                                                aria-label="krupalhp2907’s assigned issues">
                                                <img className="from-avatar avatar-user"
                                                    src="https://avatars3.githubusercontent.com/u/57654720?s=40&amp;v=4"
                                                    alt="@krupalhp2907" width="20" height="20" />
                                            </a> : ""
                                    }
                                </div>


                            </div>
                        </span>

                        <span className="ml-2 flex-1 flex-shrink-0">
                            <a href="#" className="muted-link"
                                aria-label="2 comments">
                                <svg className="octicon octicon-comment v-align-middle" viewBox="0 0 16 16"
                                    version="1.1" width="16" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z">
                                    </path>
                                </svg>
                                <span className="text-small text-bold"> {getRandomInt(50)}</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div >
        </>
    );
}

IssueListItem.propTypes = {
    /**
     * Validate issue_id
     */
    issue_id: PropTypes.number.isRequired,
    /**
     * Validate title
     */
    title: PropTypes.string.isRequired,
    /**
     * Validate detail
     */
    detail: PropTypes.string,
    /**
     * Validate status
     */
    status: PropTypes.number,
    /**
     * Validate username
     */
    username: PropTypes.string
}

export default IssueListItem;