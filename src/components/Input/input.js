import './Input.css';
import { useState } from 'react';
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";


const InputLogin = (props) => {
    const [isPasswordShown, setPasswordShow] = useState(true);

    const buttonClick = (event) => {
        setPasswordShow(prevState => !prevState);
        event.preventDefault();
    };

    return (
        <div>
            <input
                onChange={props.onChange}
                placeholder={props.isLogin ? "User Name" : "Password"}
                name={props.isLogin ? "UserName" : "Password"}
                id={props.isLogin ? "class_login" : "class_password"}
                type={props.isPassword && isPasswordShown ? 'password' : 'text'} />
            <button onClick={buttonClick} className='input_button'>
                {isPasswordShown ? <ImEyeBlocked className='eaeClose' /> : <ImEye className='eaeOpen' />}
            </button >
        </div>
    );
};

export default InputLogin;