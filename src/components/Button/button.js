import './Button.css';


const Button = ({ handlePreview, isOpen, setShow, ...props}) => {

    return (
        <button onClick={isOpen ? setShow : null || handlePreview ? handlePreview : null}
            className={'button_table'}
        >{props.children}</button>
    );
};

export default Button;