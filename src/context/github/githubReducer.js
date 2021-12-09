import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_TEXT
} from '../types.js';

const reducer = (state, action) => {
    switch (action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users : action.payload,
                loading : false
            };
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return{
                ...state,
                users: [],
                text: ''
            };
        case GET_REPOS:
            return{
                ...state,
                repos : action.payload,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading : true
            };
        case SET_TEXT:
            return{
                ...state,
                text: action.payload
            };
        default:
            return state;
    }
}

export default reducer