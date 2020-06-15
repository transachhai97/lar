import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import uiReducer from "@/state/ducks/ui/reducer";

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        ui: uiReducer,
    });

export default rootReducer;
