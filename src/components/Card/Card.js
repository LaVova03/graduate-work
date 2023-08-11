import './Card.css';

const Card = (props) => {
    return (
        <div key={props.data.id} className='container_card'>
            <div id='img'>{props.data.img}</div>
            <div id='name'>{props.data.name}</div>
            <div id='price'>{props.data.price}</div>
            <div id='quantity'>{props.data.quantity}</div>
            <div id='logo' >{props.data.logo}</div>
            <div id='basket' >{props.data.basket}</div>
        </div>
    );
};

export default Card;