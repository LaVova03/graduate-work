import './input.css';

const InputLogin = (props) => {
    return (
        <input islogin={props.islogin === true ? "input_login" : "input_password"}
            placeholder={props.islogin === true ? "User Name" : "Password"} />
    );
};

export default InputLogin;