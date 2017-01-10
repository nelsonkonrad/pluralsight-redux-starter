import initialState from '../constants/initialState';
import * as ajaxStatusActions from '../actions/ajaxStatusActions';

const actionTypeEndsInSuccess = (type) => {
    return type.substring(type.length - 8) == '_SUCCESS';
};


export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if (action.type == ajaxStatusActions.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type == ajaxStatusActions.AJAX_CALL_ERROR ||
         actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}