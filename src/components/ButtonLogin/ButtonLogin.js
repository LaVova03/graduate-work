import './ButtonLogin.css';

const ButtonLogin = (props) => {
    return (
        <button className={'button_login'}>{props.children}</button>

    );
};

export default ButtonLogin;