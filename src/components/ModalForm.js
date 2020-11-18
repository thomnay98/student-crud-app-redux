import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

import { addStudent, updateStudent } from '../actions/StudentActions';

const checkExistValue = (arr, id) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id.toString() === id){
            alert('Mã số sinh viên đã tồn tại!');
            return false;
        }
    }
    return true
}

const ModalForm = ({show, handleClose, title, tempId}) => {

    const dispatch = useDispatch();
    const students  = useSelector((state) => state.students.students);
    console.log(students);

    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [gpa, setGPA] = useState("");
    const [validated, setValidated] = useState(false);
    const [existID, setExistID] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false || !checkExistValue(students, id)) {
            e.preventDefault();
            e.stopPropagation();
            setExistID(!checkExistValue(students, id));
            setValidated(true);
            
        }else{
            const new_student = {
                id: id,
                name: name,
                email: email,
                grade: grade,
                gpa: gpa
            };
            dispatch(addStudent(new_student));
        }
        setValidated(true);
    };

    const handleUpdate = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            
        }
        setValidated(true);

        const new_student = {
            id: id,
            name: name,
            email: email,
            grade: grade,
            gpa: gpa
        };
        dispatch(updateStudent(new_student));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.currentTarget;
    //     if (form.checkValidity() === false) {
    //         e.stopPropagation();
            
    //     }else{
    //         setValidated(false);
    //         const new_student = {
    //             id: id,
    //             name: name,
    //             email: email,
    //             grade: grade,
    //             gpa: gpa
    //         };
    //         if(tempId){
    //             dispatch(updateStudent(new_student));
    //             handleClose();
    //             setID("");
    //             setName("");
    //             setEmail("");
    //             setGrade("");
    //             setGPA("");
    //         }else{
    //             if(checkExistValue(students, id, email)){
    //                 dispatch(addStudent(new_student));
    //                 handleClose();
    //                 setID("");
    //                 setName("");
    //                 setEmail("");
    //                 setGrade("");
    //                 setGPA("");
    //             }
    //         }
    //     }
        
    //     setValidated(true);
    // };

    useEffect(() => {
        if(tempId && students){
            let student = students.find((student) => student.id === tempId)
            setID(student.id)
            setName(student.name)
            setEmail(student.email)
            setGrade(student.grade)
            setGPA(student.gpa)
        }
    }, [students, tempId]);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered={true}
            dialogClassName="modal-form"
        >
            <Form noValidate validated={validated} onSubmit={!tempId?handleSubmit:handleUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>{title?title:"Thêm sinh viên"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group as={Row} controlId="formPlaintextID">
                        <Form.Label column sm="3">
                            MSSV
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                className={existID?"border border-danger":null}
                                required 
                                type="text"
                                value={id}
                                disabled={tempId?true:false}
                                placeholder="Mã số sinh viên" 
                                onChange={ (e) => setID(e.target.value) }
                            />
                            {
                                existID
                                ?
                                <Form.Control.Feedback className="text-danger">
                                    MSSV đã tồn tại!
                                </Form.Control.Feedback>
                                :
                                <Form.Control.Feedback type="invalid">
                                    MSSV không được để trống!
                                </Form.Control.Feedback>
                            }
                            
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextName">
                        <Form.Label column sm="3">
                            Họ Tên
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                required 
                                type="text" 
                                value={name}
                                placeholder="Họ và tên" 
                                onChange={ (e) => setName(e.target.value) }
                            />
                            <Form.Control.Feedback type="invalid">
                                Họ tên không được để trống!
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="3">
                            Email
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                required 
                                type="email" 
                                value={email}
                                placeholder="Email"
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                            <Form.Control.Feedback type="invalid">
                                Email không được để trống!
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextGrade">
                        <Form.Label column sm="3">
                            Lớp
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                required 
                                type="text" 
                                value={grade}
                                placeholder="Lớp"
                                onChange={ (e) => setGrade(e.target.value) }
                            />
                            <Form.Control.Feedback type="invalid">
                                Lớp không được để trống!
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextGPA">
                        <Form.Label column sm="3">
                            Điểm
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                required 
                                type="number" 
                                value={gpa}
                                placeholder="Điểm trung bình" 
                                onChange={ (e) => setGPA(e.target.value) }
                            />
                            <Form.Control.Feedback type="invalid">
                                Điểm không được để trống!
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button type="submit" variant="primary">{!tempId?"Thêm":"Cập nhật"}</Button>
                </Modal.Footer>
            </Form>
      </Modal>
    )
}

export default ModalForm;

