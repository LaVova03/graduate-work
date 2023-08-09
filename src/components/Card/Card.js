import './Card.css';
import RozetkaWhite from '../../assets/RozetkaWhite.png';

const Card = (props) => {
    const arr = [{
        id: 1,
        img: '',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        price: '25000₴',
        quantity: 'Кількість: 5шт',
        logo: '',
        basket: 'Готовий до відправки'
    }, {
        id: 2,
        img: '',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        price: '25000₴',
        quantity: 'Кількість: 5шт',
        logo: '',
        basket: 'Готовий до відправки'
    },
    {
        id: 3,
        img: '',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        price: '25000₴',
        quantity: 'Кількість: 5шт',
        logo: '',
        basket: 'Готовий до відправки'
    },
    {
        id: 4,
        img: '',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        price: '25000₴',
        quantity: 'Кількість: 5шт',
        logo: '',
        basket: 'Готовий до відправки'
    },
    {
        id: 5,
        img: '',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        price: '25000₴',
        quantity: 'Кількість: 5шт',
        logo: '',
        basket: 'Готовий до відправки'
    },
    {
        id: 6,
        img: '',
        name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
        price: '25000₴',
        quantity: 'Кількість: 5шт',
        logo: '',
        basket: 'Готовий до відправки'
    }]

    const res = arr.map(function (el) {
        return (
            <div key={el.id} className='container_card'>
                <div id='img'>{el.img}</div>
                <div id='name'>{el.name}</div>
                <div id='price'>{el.price}</div>
                <div id='quantity'>{el.quantity}</div>
                <div id='logo' >{el.logo}</div>
                <div id='basket' >{el.basket}</div>
            </div>
        );
    });

    return (
        <div className='wrap'>
            <img src={RozetkaWhite} className="image_card" alt="logo" />
            <div className='cards'>
                {res}
            </div>
        </div>
    );
};

export default Card;