import './input.css';

const InputLogin = (props) => {
    return (
        <input isLogin={props.isLogin === true ? "input_login" : "input_password"}
            placeholder={props.isLogin === true ? "User Name" : "Password"} />
    );
};

export default InputLogin;