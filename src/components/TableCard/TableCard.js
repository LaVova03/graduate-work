import './TableCard.css';
import RozetkaWhite from '../../assets/RozetkaWhite.png';
import Button from '../../components/Button/Button';
import { ImUser } from "react-icons/im";
import { IoIosAdd } from "react-icons/io";
import Table from '../Table/Table';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constans/Constants';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


const TableCard = (props) => {
    const [goods, setGoods] = useState([]);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handlePreview = () => navigate("/preview");

    useEffect(() => {
        sendRequest();
    }, []);

    const sendRequest = async () => {
        const response = await fetch(`${API_URL}/Goods`);
        const data = await response.json();

        if (response.ok) {
            setGoods(data)
        }
    }

    return (
        <div id="product-card" >
            <img src={RozetkaWhite} className="login-logo" alt="logo" />
            <div id='buttons'>
                <div id='button_left'>
                    <Button handlePreview={handlePreview}>Preview</Button>
                    <ImUser id='logo_1' />
                </div>
                <div id='button_right'>
                    <Button isOpen setShow={setShow}>Add product</Button>
                    <IoIosAdd id='logo_2' />
                </div>
            </div>
            <h1 id='products'>Products</h1>
            <div className='container'>
                <Table goods={goods} />
            </div>
            <Modal className='modalAdd' show={show}>
                <Modal.Header closeButton onHide={handleClose}>
                    <Modal.Title>Edit product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Category

                </Modal.Body>
            </Modal>
        </div >
    );
};

export default TableCard;