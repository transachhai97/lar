import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import App from "@/views/components/App";
import configureStore from "@/state/store/configureStore";
import i18n from "@/locale/i18n";
import MultipleLanguage from "@/views/components/MultipleLanguage";

const store = configureStore();

class Root extends React.Component {
    render() {
        return (
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <MultipleLanguage />
                    <App />
                </Provider>
            </I18nextProvider>
        );
    }
}

export default Root;

const root = document.getElementById("root");

if (root) {
    ReactDOM.render(<Root />, root);
} else {
    console.log("ROOT not found");
}
