import './ErrorWindow.css';

const ErrorWindow = (props) => {
    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}
            id={props.isPassword ? 'twoModal' : 'oneModal'}>
            <p>Заповніть поле !!!</p>
        </div>
    );
};

export default ErrorWindow;