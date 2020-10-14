import {_fetchReceipes} from "../../utils/NetworkUtils";
import ActionUtils from "../../utils/ActionsUtils";

export default class ReceipeAction {
    static REQUEST_RECEIPE = 'REQUEST_RECEIPE';
    static REQUEST_RECEIPE_FINISHED = 'REQUEST_RECEIPE_FINISHED';

    static getReceipe = (data) => {
        return async (dispatch) => {
            let [response] = await ActionUtils.createThunkEffect(dispatch, ReceipeAction.REQUEST_RECEIPE, _fetchReceipes, data);
            return response;
        }
    };
}

