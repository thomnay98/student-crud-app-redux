import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Student from './Student';
import ModalForm from './ModalForm';

const StudentList = () => {

    const students = useSelector(state => state.students.students);
    const [show, setShow] = useState(false);
    const [tempId, setTempId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getTempID = (id) => setTempId(id)

    return (
        <section className="table-responsive">
            <table className="table border table-striped table-hover">
                <thead className="bg-primary text-light">
                    <tr>
                        <th>MSSV</th>
                        <th>HỌ TÊN</th>
                        <th>EMAIL</th>
                        <th>LỚP</th>
                        <th>ĐIỂM</th>
                        <th>SỬA/XÓA</th>
                    </tr>
                </thead>
                <tbody>
                {
                    students.map((student) => 
                        <Student key={student.id} student={student} handleShow={handleShow} getTempID={getTempID} />
                    )
                }
                </tbody>
            </table>
            <ModalForm show={show} handleClose={handleClose} title={"Cập nhật sinh viên"} tempId={tempId} />
        </section>
    )
}

export default StudentList;
