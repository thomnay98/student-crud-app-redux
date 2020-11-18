import React from 'react';
import { useDispatch } from "react-redux";

import { deleteStudent } from '../actions/StudentActions';

const Student = (student) => {

    const dispatch = useDispatch();

    const {id, name, email, grade, gpa} = student.student;
    const { handleShow, getTempID } = student;
    
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{grade}</td>
            <td>{gpa}</td>
            <td>
                <span 
                    className="material-icons text-warning mr-2"
                    onClick={() => {
                        handleShow();
                        getTempID(id);
                    }}
                >
                    edit
                </span>
                <span
                    className="material-icons text-danger"
                    onClick={() => dispatch(deleteStudent(id))}
                    >
                    delete_forever
                </span>
            </td>
        </tr>
    )
}

export default Student;
