import normalize from 'json-api-normalizer';

import { createAction } from 'redux-actions';
import { getAnimals } from '../api/animals';

export const requestJsonApiData = createAction('REQUEST_JSON_API_DATA');
export const receieveJsonApiData = createAction('RECEIVE_JSON_API_DATA');


export const fetchAnimals = (dispatch) => {
    dispatch(requestJsonApiData());

    getAnimals().then((response) => {
        dispatch(receieveJsonApiData(normalize(response)));
    });
};
