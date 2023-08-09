import './Button.css';

const Button = (props) => {
    return (
        <button className={props.isLogin ? 'button_login' : 'button_table'}>{props.children}</button>
    );
};

export default Button;