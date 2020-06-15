import { all, fork } from "redux-saga/effects";

import logSaga from "@/state/sagas/logSaga";

export default function* rootSaga() {
    yield all([yield fork(logSaga)]);
}
