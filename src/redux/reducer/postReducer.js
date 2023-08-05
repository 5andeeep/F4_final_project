import { POST_DATA_REQUEST, POST_DATA_SUCCESS, POST_DATA_FAILURE } from "../actions/actionTypes";

let initialState = {
    loading: false,
    data: [],
    error: null
}

const postReducer = (state=initialState, action) => {
    switch(action.type){
        case POST_DATA_REQUEST:
            return(
                {...state, loading: true}
            );
        case POST_DATA_SUCCESS:
            return(
                {...state, loading: false, data: action.payload, error: null}
            );
        case POST_DATA_FAILURE:
            return(
                {...state, loading: false, data: [], error: action.payload}
            );
        default:
            return state;
    }
}

export default postReducer;