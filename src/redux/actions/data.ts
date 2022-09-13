
import { DataActionTypes } from "../actiontypes";

export const DataReqAction = (): any => ({
  type: DataActionTypes.DATA_REQ,
});
export const DataSuccessAction = ({
  data,
}: any): any => ({
  type: DataActionTypes.DATA_SUCCESS,
  payload: { data },
});
export const DataFailAction = (
  error: any
): any => ({
  type: DataActionTypes.DATA_FAILED,
  payload: error,
});
