import './Button.css';


const Button = ({ handlePreview, isOpen, setShow, ...props }) => {

    return (
        <button onClick={isOpen ? setShow : null || handlePreview ? handlePreview : null}
            className={props.isLogin ? 'button_login' : 'button_table'}
        >{props.children}</button>
    );
};

export default Button;