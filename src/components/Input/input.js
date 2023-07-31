import './input.css';

const InputLogin = (props) => {
    return (
        <input isLogin={props.isLogin === true ? "input_login" : "input_password"}
            placeholder={props.isPassword === true ? "Password" : "User Name"} />
    );
};

export default InputLogin;