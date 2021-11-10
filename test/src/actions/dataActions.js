import axios from "axios";
import {
    GET_DATA
} from "./types";
// Register User

export const getData = userData => dispatch => {
    console.log(userData);
    axios
        .post("/api/users/data", userData)
        .then(res => {
            dispatch(getDataDecoded(res.data))
        });

}

export const getDataDecoded = data => {
    return {
        type: GET_DATA,
        payload: data
    };
};