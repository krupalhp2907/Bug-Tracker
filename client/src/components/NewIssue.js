import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

function NewIssue({ handleFormSubmit }) {

    const [isLoading, setIsLoading] = useState(false);

    let btnRef = useRef();

    function handleFormSubmit_(e) {
        if (btnRef.current) {
            btnRef.current.setAttribute("disabled", "disabled");
        }
        setIsLoading(true);
        handleFormSubmit(e, (err, new_) => {
            setIsLoading(false);
            btnRef.current.removeAttribute("disabled");
        });

    }

    return (
        <details className="details-reset details-overlay details-overlay-dark">
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
                            accept-charset="UTF-8" method="post"
                            onSubmit={handleFormSubmit_}
                        >

                            <dl className="form-group">
                                <dt className="input-label"><label name="username"
                                    autocapitalize="off" autofocus="autofocus"
                                    for="user_username">Pick a username</label></dt>
                                <dd><input name="username" autocapitalize="off" autofocus="autofocus"
                                    className="form-control" type="text" id="user_username"
                                    autocomplete="off" spellcheck="false" placeholder="Can be empty. Just for demo." /></dd>
                            </dl>


                            <dl className="form-group">
                                <dt className="input-label"><label name="title"
                                    autocapitalize="off" autofocus="autofocus"
                                    for="issue_title">Issue Title</label></dt>
                                <dd><input name="title" autocapitalize="off" autofocus="autofocus"
                                    className="form-control" type="text" id="issue_title"
                                    autocomplete="off" spellcheck="false" placeholder="Issue title should be more then 2 and less then 255 characters." /></dd>
                            </dl>

                            <dl className="form-group">
                                <dt className="input-label"><label name="detail"
                                    for="issue_detail">Issue report</label></dt>
                                <dd><textarea name="detail" id="issue_detail"
                                    placeholder="Issue report should be descriptive i.e more then 10 letters" aria-label="Comment body"
                                    className="form-control input-contrast comment-form-textarea js-comment-field js-paste-markdown js-task-list-field js-quick-submit js-size-to-fit js-session-resumable js-saved-reply-shortcut-comment-field"
                                    required=""></textarea>
                                </dd>
                            </dl>

                            <button ref={btnRef} className={`btn btn-primary mt-3 btn-block ${isLoading === true ? "disabled" : ""}`} type="submit">
                                {isLoading === true ? "Submitting your issue" : "Submit your Issue"}
                            </button>
                        </form>
                        <p className="mt-4 text-gray text-center">We'll be using cookies to store your
                        name.
                        Read our <a href="https://docs.github.com/terms" target="_blank">cookies policy</a>.</p>
                    </div>

                </div>
            </details-dialog>
        </details>
    );
}

NewIssue.prototype = {
    /**
     * Validate func
     */
    handleFormSubmit: PropTypes.func
}

export default NewIssue;