import i18n from "@/locale/i18n";
import React from "react";

class NetworkDisconnect extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <h1>{i18n.t("No internet")}</h1>
            </div>
        );
    }
}

export default NetworkDisconnect;
