import {
    GET_DATA
} from "../actions/types";
const initialState = {
    data: {}
};
export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}