import './NoSuchUser.css';

const NoSuchUser = (props) => {
    return (
        <div className={`modal__no__user ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
            <p>Такий користувач не існує, перевірте данні, та введіть ще раз !!!</p>
        </div>
    );
};

export default NoSuchUser;