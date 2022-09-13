import { all } from "redux-saga/effects";
import { DataWatcher } from "./data";

function* AllSagas(){
    yield all([DataWatcher()])
}
export function*RootSaga(){
    yield all([AllSagas()])
}