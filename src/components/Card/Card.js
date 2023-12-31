import './Card.css';
import { useNavigate } from "react-router-dom";


const Card = ({ data }) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(`/preview/${data.id}`)} key={data.id} className='container_card'>
            <div id='img'>{data.img}</div>
            <div id='name'>{data.name}</div>
            <div id='price'>{data.price}</div>
            <div id='quantity'>{data.quantity}</div>
            <div id='logo' >{data.logo}</div>
            <div id='basket' >{data.basket}</div>
        </button>
    );
};

export default Card;