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
    const [edit, setEdit] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [editId, setEditId] = useState({ id: '' });
    const [shake, setShake] = useState();
    const [submitFornik, setSubmitFormik] = useState('');
    const [nameEdit, setNameEdit] = useState('')
    const [editIdModal, setEditIdModal] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        sendRequest();
        checkSabmitFornik();
    }, [shake, submitFornik]);


    const setId = (id) => {
        setEditId(id);
    };

    const handleClose = () => {
        setShow(false) || setEdit(false)
    }

    const handleOpen = (id) => {
        setModalShow(true);
        setId(id);
    };

    const closeModal = () => {
        setModalShow(false);
    };

    const handlePreview = () => navigate("/preview");

    const sendRequest = async () => {
        try {
            const response = await fetch(`${API_URL}/Goods`);
            const data = await response.json();

            if (response.ok && !shake) {
                setGoods(data);
            } else {
                data.reverse();
                setGoods(data);
            };
        } catch {
            console.log('Error with fetch Goods')
        };
    };

    const deleteItem = async (event) => {
        event.preventDefault();
        try {
            await fetch(`${API_URL}/Goods/${editId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch {
            console.log('Error with fetch Goods Delete')
        };
        setModalShow(false);
        sendRequest();
    };

    const postItem = async () => {
        try {
            await fetch(`${API_URL}/Goods`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        Category: submitFornik.Category,
                        Name: submitFornik.Name,
                        Quantity: submitFornik.Quantity,
                        Price: submitFornik.Price,
                        Description: submitFornik.Description,
                    }
                )
            });
        } catch {
            console.log('Error with fetch Goods Delete')
        };
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

    const changeEdit = () => {
        setEdit(true);
    }


    const checkSabmitFornik = () => {
        let current = 0;
        for (let key in submitFornik) {
            if (submitFornik[key].length === 0) {
                break;
            } else {
                current++;
            }

            if (current === 5) {
                postItem();
                current = 0;
            };
        };
    };

    const setEditElement = (id, data) => {
        setNameEdit(data);
        setEditIdModal(id)
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
                <Table goods={goods} handleOpen={handleOpen} changeShake={changeShake}
                    changeEdit={changeEdit} setNameEdit={setNameEdit} setEditIdModal={setEditIdModal} setEditElement={setEditElement} />
            </div>
            <div className='table_modal_confirm'>
                <ModalTableConfirm deleteItem={deleteItem}
                    modalShow={modalShow} closeModal={closeModal} />
            </div>
            <ModalEditProduct show={show} handleClose={handleClose} setSubmitFormik={setSubmitFormik}
                submitFornik={submitFornik} name='Add product' />
            <ModalEditProduct edit={edit} handleClose={handleClose} nameEdit={nameEdit} name='Edit product' />
        </div >
    );
};

export default TableCard;