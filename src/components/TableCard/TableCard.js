import './TableCard.css'
import RozetkaWhite from '../../img/RozetkaWhite.png';
import Button from '../../components/Button/button';
import { ImUser } from "react-icons/im";
import { IoIosAdd } from "react-icons/io";
import Table from '../Table/Table'


const TableCard = () => {
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
                <Table />
            </div>
        </div >
    );
};

export default TableCard;