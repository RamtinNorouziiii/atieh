import { DataActionTypes } from "../actiontypes";
const initialState = {
  loading: false,
  data: [],
  error: null,
};
export const AliasReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case DataActionTypes.DATA_REQ:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case DataActionTypes.DATA_SUCCESS:
     

      return {
        ...state,
        loading: false,
        data: action.payload.data.alias,
        error: null,
      };
     
    case DataActionTypes.DATA_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
  
};
