import { configureStore  } from "@reduxjs/toolkit";
import { AllReducers } from "./reducers";
import createSagaMiddleware from "redux-saga"
import { RootSaga } from "./sagas";
const sagaMiddleWare = createSagaMiddleware()
export const Store=configureStore({
    reducer:AllReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
})
sagaMiddleWare.run(RootSaga)