import {
    GET_USERS_LOADED,
    GET_USERS_LOADING,
    GET_PRODUCTS_LOADED,
    GET_PRODUCTS_LOADING,
} from "../actions/types";

const initialState = {
    loading: false,
    users: [],
    products: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_USERS_LOADED:
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS_LOADED:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        default:
            return state;
    }
}
