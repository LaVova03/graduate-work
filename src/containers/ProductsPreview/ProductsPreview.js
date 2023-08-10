import './ProductsPreview.css';
import Card from '../../components/Card/Card';
import RozetkaWhite from '../../assets/RozetkaWhite.png';


function ProductsPreview(props) {
  const arr = [{
    id: 1,
    img: '',
    name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
    price: '25000₴',
    quantity: 'Кількість: 5шт',
    logo: '',
    basket: 'Готовий до відправки'
  },
  {
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
  }];

  return (
    <div className="list_product">
      <img src={RozetkaWhite} className="image_card" alt="logo" />
      <div className='cards'>
        {arr.map(data => {
          return (
            <Card data={data} key={data.id} />
          )
        })}
      </div>
    </div>
  );
};

export default ProductsPreview;