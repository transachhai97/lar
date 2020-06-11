import React from "react";
import ReactDOM from "react-dom";

import i18n from "@/locale/i18n";

class Root extends React.Component {
    render() {
        console.log("Example");
        return (
            <div className="container">
                <h1 className="row justify-content-center">
                    {i18n.t("Welcome to React")}
                </h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                I&apos;m an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;

const root = document.getElementById("root");

if (root) {
    ReactDOM.render(<Root />, root);
}
