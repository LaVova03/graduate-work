import './ButtonLogin.css';

const ButtonLogin = (props) => (<button className={'button_login'} {...props}>{props.children}</button>);

export default ButtonLogin;