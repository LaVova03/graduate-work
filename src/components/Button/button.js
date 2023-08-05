import './button.css';

const Button = (props) => {
    return (
        <button className={props.className === true ? 'button_login' : 'button_table'}>{props.children}</button>
    );
};

export default Button;