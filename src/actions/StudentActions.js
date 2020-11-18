import * as types from '../constants/ActionTypes';

export const addStudent = (student) => ({
    type: types.ADD_STUDENT,
    payload: student
});

export const getStudent = (id) => ({
    type: types.GET_STUDENT,
    payload: id
});

export const updateStudent = (student) => ({
    type: types.UPDATE_STUDENT,
    payload: student
});

export const deleteStudent = (id) => ({
    type: types.DELETE_STUDENT,
    payload: id
});

export const clearStudent = (id) => ({
    type: types.CLEAR_STUDENT,
    payload: id
});