import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { bindActionCreators, compose } from "redux";

import i18n from "@/locale/i18n";

class App extends React.Component {
    render() {
        return pug`
          div.container
            h1.row.justify-content-center #{i18n.t('Welcome to React')}
            div.row.justify-content-center
              div.col-md-8
                div.card
                  div.card-header Example Component
                  div.card-body I'm an example component!
            `;
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

export default compose(withConnect)(App);
