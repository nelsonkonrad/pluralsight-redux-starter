import AuthorApi from '../api/mockAuthorAPI';
import {beginAjaxCall} from './ajaxStatusActions';

export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';

export function loadAuthorsSuccess(authors) {
    return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {                                  // thunk
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}