import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import monitorReducersEnhancer from "@/store/enhancers/monitorReducerEnhancer";
import { logger, crashReporter } from "@/store/middleware/logger";
import history from "@/store/history";
import rootReducer from "@/reducers";
import rootSaga from "@/sagas";
import isDevelopment, { isReduxLogger } from "@/env";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
    const middlewares = [
        thunkMiddleware,
        routerMiddleware(history),
        sagaMiddleware,
    ];

    if (isReduxLogger) {
        middlewares.push(logger, crashReporter);
    }

    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = isDevelopment
        ? composeWithDevTools(...enhancers)
        : compose(...enhancers);
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composedEnhancers
    );

    sagaMiddleware.run(rootSaga);

    if (isDevelopment && module.hot) {
        module.hot.accept("../reducers", () => {
            const nextReducer = require("../reducers").default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
