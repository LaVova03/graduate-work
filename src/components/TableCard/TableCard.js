import './TableCard.css';
import RozetkaWhite from '../../assets/RozetkaWhite.png';
import Button from '../../components/Button/Button';
import { ImUser } from "react-icons/im";
import { IoIosAdd } from "react-icons/io";
import Table from '../Table/Table';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constans/Constants';
import { useNavigate } from "react-router-dom";
import ModalTableConfirm from '../ModalTableConfirm/ModalTableConfirm';
import ModalEditProduct from '../ModalEditProduct/ModalEditProduct';


const TableCard = () => {
    const [goods, setGoods] = useState([]);
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [editId, setEditId] = useState({ id: '' });
    const [shake, setShake] = useState();

    const navigate = useNavigate();

    const setId = (id) => {
        setEditId(id);
    };

    const handleClose = () => setShow(false);

    const handleOpen = (id) => {
        setModalShow(true);
        setId(id);
    };

    const closeModal = () => {
        setModalShow(false);
    };

    const handlePreview = () => navigate("/preview");

    useEffect(() => {
        sendRequest();
    }, [shake]);

    const sendRequest = async () => {
        const response = await fetch(`${API_URL}/Goods`);
        const data = await response.json();

        if (response.ok && !shake) {
            setGoods(data);
        } else {
            data.reverse();
            setGoods(data);
        };
    };

    const deleteItem = async (event) => {
        event.preventDefault();

        await fetch(`${API_URL}/Goods/${editId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        setModalShow(false);
        sendRequest();
    };

    const changeShake = () => {
        if (!shake) {
            setShake(true);
        } else {
            setShake(false);
        }
        sendRequest();
    };


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
                <Table goods={goods} handleOpen={handleOpen} changeShake={changeShake} />
            </div>
            <div className='table_modal_confirm'>
                <ModalTableConfirm deleteItem={deleteItem}
                    modalShow={modalShow} closeModal={closeModal} />
            </div>
            <ModalEditProduct show={show} handleClose={handleClose} />
        </div >
    );
};

export default TableCard;