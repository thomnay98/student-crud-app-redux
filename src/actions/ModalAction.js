import * as types from '../constants/ActionTypes';

export const openModal = (modalType) => ({
    type: types.OPEN_MODAL,
    payload: modalType
});

export const closeModal = () => ({
    type: types.CLOSE_MODAL,
});