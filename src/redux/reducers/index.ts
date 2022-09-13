import { StockReducer } from './stock';
import { BannerReducer } from './banner';
import { NewsReducer } from './news';
import { AliasReducer } from './alias';
import { combineReducers } from "redux";

export const AllReducers = combineReducers({
    alias:AliasReducer,
    news:NewsReducer,
    banner:BannerReducer,
    stock:StockReducer
})
export type RootSelector = ReturnType<typeof AllReducers>;