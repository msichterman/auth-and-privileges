import axios from "axios";
import {returnErrors} from "./errorActions";

import {
    GET_USERS_LOADED,
    GET_USERS_LOADING,
    GET_PRODUCTS_LOADED,
    GET_PRODUCTS_LOADING
} from "./types";

// Get Users Employees
export const getUsers = () => (dispatch, getState) => {
    // Get Users Loading
    dispatch({type: GET_USERS_LOADING});
    axios
        .get("/api/users", tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_USERS_LOADED,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// Get products
export const getProducts = () => (dispatch, getState) => {
    // Get Users Loading
    dispatch({type: GET_PRODUCTS_LOADING});
    axios
        .get("/api/products", tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_PRODUCTS_LOADED,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const tokenConfig = getState => {
    // Get token from localStorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    // If token, add to headers
    if (token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
};
