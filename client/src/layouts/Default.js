import React from "react";
import PropTypes from "prop-types";

const DefaultLayout = ({ children, noNavbar, noFooter, update }) => (
    <div className="container-xl clearfix new-discussion-timeline  px-3 px-md-4 px-lg-5 mt-3">
        <div className="repository-content ">
            <div className="js-check-all-container" data-pjax>
                {children}
            </div>
        </div>
    </div>
);

DefaultLayout.propTypes = {
    /**
     * Whether to display the navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool,
    /**
     * Update
     */
    update: PropTypes.func
};

DefaultLayout.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default DefaultLayout;