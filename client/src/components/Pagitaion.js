import React, { useState } from 'react';
import PropTypes from "prop-types";

import { defaultStateIssueList, pagiDistribution } from '../util';

function Pagitation({ total_issues, update, initial_page = 1 }) {

    const [currPage, SetCurrPage] = useState(initial_page);


    let per_page = 10;
    let number_pages = parseInt(total_issues / per_page, 10) + 1;
    if (total_issues % per_page === 0) number_pages -= 1;
    let pagi_distrib = pagiDistribution(currPage, number_pages);

    function handleSetCurrPage(new_) {
        if (currPage == new_) {
            return;
        }
        update(new_);
        SetCurrPage(new_);
    }

    return (
        <>
            <div className="paginate-container d-none d-sm-flex flex-sm-justify-center">
                <div role="navigation" aria-label="Pagination" className="pagination">
                    <span
                        className={`previous_page ${currPage === 1 ? "disabled" : ""}`}
                        onClick={() => {
                            if (currPage > 1) {
                                handleSetCurrPage(currPage - 1);
                            }
                        }}
                    >
                        Previous
                    </span>


                    {
                        pagi_distrib.map((val, index) => {
                            return (
                                val === -1 ? <span className="gap" key={index}>…</span> :
                                    <a
                                        rel="next"
                                        key={index}
                                        className={`mx-1 ${currPage === val ? "current" : ""}`}
                                        onClick={() => handleSetCurrPage(val)}
                                    >
                                        {val}
                                    </a>
                            )
                        })
                    }

                    <span
                        className={`next_page ${currPage === number_pages ? "disabled" : ""}`}
                        onClick={() => {
                            if (currPage < number_pages) {
                                handleSetCurrPage(currPage + 1);
                            }
                        }}
                    >
                        Next
                    </span>
                </div>
            </div>

            <div className="paginate-container d-sm-none mb-5">
                <div role="navigation" aria-label="Pagination" className="pagination">
                    <span className="previous_page disabled">Previous</span>
                    <a className="next_page" rel="next" href="/twbs/bootstrap/issues?page=2&amp;q=is%3Aissue+is%3Aopen">
                        Next </a>
                </div>
            </div>
        </>
    );
}

Pagitation.prototype = {
    /**
     * Validate opened_issues
     */
    total_issues: PropTypes.number,

    /**
     * Validate update page
     */
    update: PropTypes.func,
    /**
     * Validate initial page
     */
    initial_page: PropTypes.func
}


export default Pagitation;