import './PreviewIdCard.css';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constans/Constants';
import RozetkaWhite from '../../assets/RozetkaWhite.png';
import PatchCheck from '../../assets/PatchCheck.png';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const PreviewIdCard = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    const { id } = useParams();

    const handlePreview = () => navigate("/preview");

    useEffect(() => {
        sendRequestProduct();
    }, []);

    const sendRequestProduct = async () => {
        const response = await fetch(`${API_URL}/Products/${id}`);
        const data = await response.json();

        if (response.ok) {
            setProduct(data)
        };
    };


    return (
        <div>
            <div className='head_card'>
                <img src={RozetkaWhite} alt="logo" />
            </div>
            <div id='body'>
                <div id="header">
                    <button onClick={handlePreview} className='back-preview'></button>{product.name}
                </div>
                <div className='grid'>
                    <img id='image_card' src={product.image} alt="logo" />
                    <div className='right-text'>
                        <p id="availability" className='strict'>
                            <img src={PatchCheck} id="patch" alt="logo" />
                            {product.availability}</p>
                        <p className='strict'>{product.price}</p>
                        <p id="last_srt" className='strict'>{product.quantity}</p>
                    </div>
                </div>
                <div id='description-div'>Опис <b id='description'>{product.description}</b></div>
                <div id="text">{product.text}</div>
                <div id="text">{product.text}</div>
                <div id="text">{product.text}</div>
            </div>
        </div>
    );
};

export default PreviewIdCard;