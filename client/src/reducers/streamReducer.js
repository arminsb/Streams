import _ from 'lodash';
import {
    FETCH_STREAMS,
    CREATE_STREAM,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
} from '../actions/types';

const myFunction = (state = [], action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return {...state,..._.mapKeys(action.payload,'id')};
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.id);   
        default:
            return state;
    }
};

export default myFunction;