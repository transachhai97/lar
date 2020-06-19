import logSaga from "@/state/sagas/logSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([yield fork(logSaga)]);
}
