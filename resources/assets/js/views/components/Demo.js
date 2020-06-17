import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

import i18n from "@/locale/i18n";
import { toastError, toastSuccess } from "@/helpers/toast";
import uiAction from "@/state/ducks/ui/action";

class Demo extends React.Component {
    render() {
        console.log("Demo");
        return (
            <div className="container">
                <h1 className="row justify-content-center">
                    {i18n.t("welcome")}
                </h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div className="card-body">
                                I&apos;m an example component!
                            </div>
                            <div className="card-footer justify-content-center">
                                <button
                                    className="btn btn-outline-info justify-content-center"
                                    onClick={() => this.props.uiShowLoading()}
                                >
                                    Loading
                                </button>
                                <button
                                    className="btn btn-outline-success justify-content-center"
                                    onClick={() => toastSuccess("Thành công")}
                                >
                                    Thành công
                                </button>
                                <button
                                    className="btn btn-outline-danger justify-content-center"
                                    onClick={() => toastError("Thất bại")}
                                >
                                    Thất bại
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const propTypes = {
    uiShowLoading: PropTypes.func,
};

const defaultProps = {
    uiShowLoading: () => {},
};

Demo.propTypes = propTypes;

Demo.defaultProps = defaultProps;

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        uiShowLoading: bindActionCreators(uiAction.showLoading, dispatch),
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withTranslation(), withConnect)(Demo);
