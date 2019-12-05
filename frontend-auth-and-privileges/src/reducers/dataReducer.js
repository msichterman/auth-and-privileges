import {
    GET_USERS_LOADED,
    GET_USERS_LOADING,
    GET_PRODUCTS_LOADED,
    GET_PRODUCTS_LOADING,
    UPDATE_USER_EDITING,
    UPDATE_PRODUCT_EDITING
} from "../actions/types";

const initialState = {
    loading: false,
    users: [],
    products: [],
    userEditing: null,
    productEditing: null
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
        case UPDATE_USER_EDITING:
            return {
                ...state,
                userEditing: action.payload
            };
        case UPDATE_PRODUCT_EDITING:
            return {
                ...state,
                productEditing: action.payload
            };
        default:
            return state;
    }
}
