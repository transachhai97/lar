import uiReducer from "@/state/ducks/ui/reducer";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        ui: uiReducer,
    });

export default rootReducer;
