import i18n from "@/locale/i18n";
import React from "react";

class MultipleLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: ["en", "vi"],
        };
    }

    changeLanguage = (lng) => {
        if (lng !== i18n.language) {
            i18n.changeLanguage(lng);
        }
    };

    _renderSelect = () => {
        let { lng } = this.state;
        let xhtml = null;
        xhtml = lng.map((item, index) => {
            return (
                <button
                    className="btn btn-outline-info"
                    key={index}
                    onClick={() => this.changeLanguage(item)}
                >
                    {item}
                </button>
            );
        });
        return xhtml;
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {this._renderSelect()}
                </div>
            </div>
        );
    }
}

export default MultipleLanguage;
