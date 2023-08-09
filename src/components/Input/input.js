import './Input.css';
import { useState } from 'react';
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const InputLogin = (props) => {
    const [isInputButton, setInputButton] = useState(false);
    const [isPasswordShown, setPasswordShow] = useState(true);

    const buttonClick = () => {
        setInputButton(prevState => !prevState);
        setPasswordShow(prevState => !prevState);
    }

    return (
        <div>
            <input
                placeholder={props.isLogin ? "User Name" : "Password"}
                type={props.isPassword && isPasswordShown ? 'password' : 'text'} />
            <button onClick={buttonClick} className='input_button'>
                {isInputButton ? <ImEye className='eaeOpen' /> : <ImEyeBlocked className='eaeClose' />}
            </button >
        </div>
    );
};

export default InputLogin;