import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { bindActionCreators, compose } from "redux";
import { withTranslation } from "react-i18next";

import GlobalLoading from "@/views/components/GlobalLoading";
import Toastify from "@/views/components/Toastify";
import Demo from "@/views/components/Demo";

class App extends React.Component {
    render() {
        console.log("App");
        return (
            <React.Fragment>
                <GlobalLoading />
                <Toastify />
                <Demo />
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
