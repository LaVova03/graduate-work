import './Button.css';


const Button = ({ handlePreview, isOpen, changeAdd, add, ...props }) => {
    return (
        <button onClick={isOpen ? changeAdd : null || handlePreview ? handlePreview : null}
            className={'button_table'}
        >{props.children}</button>
    );
};

export default Button;