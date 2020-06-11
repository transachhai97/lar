// eslint-disable-next-line no-unused-vars
export const logger = (store) => (next) => (action) => {
    // console.group(action.type);
    // console.info("dispatching", action);
    let result = next(action);
    // console.log("next state", store.getState());
    // console.groupEnd();
    return result;
};

// eslint-disable-next-line no-unused-vars
export const crashReporter = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {
        console.error("Caught an exception!", err);
        throw err;
    }
};
