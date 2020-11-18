import React, { useState } from 'react';

import ModalForm from './ModalForm';

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">Quản Lý Sinh Viên</a>
                <button type="button" className="btn btn-light ml-auto" onClick={handleShow}>Thêm sinh viên</button>
                <ModalForm show={show} handleClose={handleClose} />
            </div>
        </nav>
    );
};

export default Header;

