import { STATUS } from "../constants/action-types";

const initialState = {
    active: true,
    disabled: false,
};

function rootReducer(state = initialState, action) {
    if (action.type === STATUS) {
        return Object.assign({}, state, {
            active: action.payload.status,
            disabled: action.payload.disabled
        });
    }
    return state;
}

export default rootReducer;