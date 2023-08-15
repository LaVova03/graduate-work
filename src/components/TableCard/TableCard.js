import './TableCard.css';
import RozetkaWhite from '../../assets/RozetkaWhite.png';
import Button from '../../components/Button/Button';
import { ImUser } from "react-icons/im";
import { IoIosAdd } from "react-icons/io";
import Table from '../Table/Table';
import { useEffect, useState } from 'react';


const TableCard = (props) => {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        sendRequest();
    }, []);

    const sendRequest = async () => {
        const response = await fetch('https://64980a639543ce0f49e198cf.mockapi.io/Goods');
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
                    <Button isbutton={false}>Preview</Button>
                    <ImUser id='logo_1' />
                </div>
                <div id='button_right'>
                    <Button isbutton={false}>Add product</Button>
                    <IoIosAdd id='logo_2' />
                </div>
            </div>
            <h1 id='products'>Products</h1>
            <div className='container'>
                <Table goods={goods} />
            </div>
        </div >
    );
};

export default TableCard;