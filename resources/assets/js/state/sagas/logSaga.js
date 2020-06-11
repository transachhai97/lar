import { takeLatest, select, take } from "redux-saga/effects";

function* watchAndLog() {
    while (true) {
        const action = yield take("*");
        const state = yield select();

        // console.group(action.type);
        // console.info("dispatching", action);
        // console.log("next state", state);
        // console.groupEnd();
        console.log("===>", action, state);
    }
}

function* logSaga() {
    yield takeLatest("*", watchAndLog);
}

export default logSaga;
