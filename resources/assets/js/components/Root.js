import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "@/components/App";
import reducer from "@/reducers";

const store = createStore(reducer);

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
