import { ADD_STUDENT, GET_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, CLEAR_STUDENT } from '../constants/ActionTypes';

const intialState = {

    students: [
        {
            id: 16520000,
            name: "Hoàng Bách",
            email: "hoangbach@gmail.com",
            grade: "CNTT2016",
            gpa: 6.4
        },
        {
            id: 16520001,
            name: "Hồng Hài Nhi",
            email: "nhihh@gmail.com",
            grade: "KHMT2016",
            gpa: 6.9
        },
        {
            id: 16520002,
            name: "Triệu Mẫn",
            email: "trieuman@gmail.com",
            grade: "ANTT2016",
            gpa: 6.1
        },
    ],
    student: null
}

export const studentReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students]
            };

        case GET_STUDENT:
            let tempStudent = state.students.filter(
                (student) => student.id === action.payload
            );
            tempStudent = tempStudent.values();
            for (let val of tempStudent) {
                tempStudent = val;
            }
            return {
                ...state,
                student: tempStudent,
            };

        case UPDATE_STUDENT:
            return {
                ...state,
                students: state.students.map((student) =>
                    student.id === action.payload.id ? action.payload : student
                ),
            };
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload)
            };

        case CLEAR_STUDENT:
            return {
                ...state,
                selectedStudents: [],
            };

        default:
            return state;
    }
};