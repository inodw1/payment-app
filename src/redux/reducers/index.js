import { STATUS, CARD_DATA } from "../constants/action-types";

const initialState = {
    active: true,
    disabled: false,
    card_data: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === STATUS) {
        return Object.assign({}, state, {
            active: action.payload.status,
            disabled: action.payload.disabled
        });
    } else if (action.type === CARD_DATA) {
        return Object.assign({}, state, {
            card_data: action.payload
        });
    }
    return state;
}

export default rootReducer;