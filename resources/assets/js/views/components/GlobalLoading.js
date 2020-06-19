import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

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

const defaultProps = {
    noLoading: true,
};

const propTypes = {
    noLoading: PropTypes.bool,
};

GlobalLoading.defaultProps = defaultProps;

GlobalLoading.propTypes = propTypes;

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
