import './LoginCard.css';
import logoRozetka from '../../assets/logoRozetka.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import ErrorWindow from '../ErrorWindow/ErrorWindow';
import NoSuchUser from '../NoSuchUser/NoSuchUser';


const LoginCard = () => {
    const [inputs, setInputs] = useState({
        UserName: '',
        Password: ''
    });
    const [modal, setModal] = useState({
        modal1: false,
        modal2: false,
        modal3: false
    });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputs.UserName) {
            setModal(modal => ({ ...modal, modal1: true }));
            setModal(modal => ({ ...modal, modal3: false }));
        } else {
            setModal(modal => ({ ...modal, modal1: false }));
        } if (!inputs.Password) {
            setModal(modal => ({ ...modal, modal2: true }));
            setModal(modal => ({ ...modal, modal3: false }));
        } else {
            setModal(modal => ({ ...modal, modal2: false }));
        } if (inputs.UserName === 'admin' && inputs.Password === 'password') {
            localStorage.setItem("token", "gffsdf1fsfdsfgf");
            setModal(modal => ({ ...modal, modal3: false }))
        } if ((inputs.UserName !== 'admin' && inputs.UserName !== '') && (inputs.Password !== 'password' && inputs.Password !== '')) {
            setModal(modal => ({ ...modal, modal3: true }));
        };
    };
    return (
        <div id="login-card">
            <img src={logoRozetka} className="login-logo" alt="logo" />
            <form onSubmit={handleSubmit} >
                <Input
                    isLogin
                    value={inputs || ""}
                    onChange={handleChange} />
                <Input
                    isPassword
                    value={inputs || ""}
                    onChange={handleChange} />
                <Button isLogin type="submit">Login</Button>
            </form >
            <ErrorWindow isOpened={modal.modal1} />
            <ErrorWindow isPassword isOpened={modal.modal2} />
            <NoSuchUser isOpened={modal.modal3} />
        </div>
    );
};




export default LoginCard;