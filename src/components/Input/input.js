import './input.css';

const InputLogin = (props) => {
    return (
        <input placeholder={props.isLogin ? "User Name" : "Password"} />
    );
};

export default InputLogin;