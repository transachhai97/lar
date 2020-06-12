import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

class GlobalLoading extends React.Component {
    render() {
        let xhtml = null;
        const { noLoading } = this.props;
        if (!noLoading) {
            xhtml = (
                <div className="loading">
                    <div className="icon-loading" />
                </div>
            );
        }
        return xhtml;
    }
}

GlobalLoading.defaultProps = {
    noLoading: true,
};

GlobalLoading.propTypes = {
    noLoading: PropTypes.bool,
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => {
    return {
        noLoading: !state.ui?.isLoading,
    };
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => {
    return {};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GlobalLoading);
