import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { bindActionCreators, compose } from "redux";
import { withTranslation } from "react-i18next";

import i18n from "@/locale/i18n";
import GlobalLoading from "@/views/components/GlobalLoading";

class App extends React.Component {
    render() {
        console.log("App");
        return (
            <React.Fragment>
                <GlobalLoading />
                <div className="container">
                    <h1 className="row justify-content-center">
                        {i18n.t("Welcome to React")}
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    Example Component
                                </div>
                                <div className="card-body">
                                    I&apos;m an example component!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => {
    return {};
};

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => {
    return {};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withTranslation(), withConnect)(App);
