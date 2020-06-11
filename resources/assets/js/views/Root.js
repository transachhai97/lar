import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "@/views/components/App";
import configureStore from "@/state/store/configureStore";

const store = configureStore();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
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
