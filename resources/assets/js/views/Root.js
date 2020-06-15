import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import App from "@/views/components/App";
import configureStore from "@/state/store/configureStore";
import i18n from "@/locale/i18n";
import MultipleLanguage from "@/views/components/MultipleLanguage";
import NetworkDisconnect from "@/views/components/NetworkDisconnect";

const store = configureStore();

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            networkDisconnect: false,
        };
    }

    componentWillMount() {
        window.addEventListener("offline", this._checkNetworkConnection, false);
        window.addEventListener("online", this._checkNetworkConnection, false);
    }

    componentWillUnmount() {
        window.removeEventListener(
            "offline",
            this._checkNetworkConnection,
            false
        );
        window.removeEventListener(
            "online",
            this._checkNetworkConnection,
            false
        );
    }

    _checkNetworkConnection = (e) => {
        this.setState({
            networkDisconnect: e.type === "offline",
        });

        if (!this.state.networkDisconnect) {
            window.location.reload();
        }
    };

    render() {
        let { networkDisconnect } = this.state;
        if (networkDisconnect) {
            return <NetworkDisconnect />;
        }
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
