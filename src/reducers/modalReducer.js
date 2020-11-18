import { OPEN_MODAL, CLOSE_MODAL } from '../constants/ActionTypes';

const intialModalState = {
    modalType: null
}

export const modalReducer = (state = intialModalState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case OPEN_MODAL:
            return newState.modalType = action.modalType;
        
        case CLOSE_MODAL:
            return intialModalState;

        default:
            return state;
    }
}