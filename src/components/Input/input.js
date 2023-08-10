import './Input.css';
import { useState } from 'react';
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const InputLogin = (props) => {
    const [isPasswordShown, setPasswordShow] = useState(true);

    const buttonClick = () => {
        setPasswordShow(prevState => !prevState);
    };

    return (
        <div>
            <input
                placeholder={props.isLogin ? "User Name" : "Password"}
                type={props.isPassword && isPasswordShown ? 'password' : 'text'} />
            <button onClick={buttonClick} className='input_button'>
                {isPasswordShown ? <ImEyeBlocked className='eaeClose' /> : <ImEye className='eaeOpen' />}
            </button >
        </div>
    );
};

export default InputLogin;