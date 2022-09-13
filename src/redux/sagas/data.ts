import { DataActionTypes } from "../actiontypes"
import {takeLatest,call,put} from "redux-saga/effects"
import { DataFailAction, DataSuccessAction } from "../actions/data"
import { FetchData } from "../api/data"
function*DataFnc():any{
    
try {
   const res= yield call(FetchData)
   yield put(DataSuccessAction({data:res.items}))
} catch (err) {
    yield put(DataFailAction({error: (err as Error).message}))
}
}
export function*DataWatcher(){
yield takeLatest(DataActionTypes.DATA_REQ,DataFnc)
}