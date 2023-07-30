import './input.css';

const InputLogin = (props) => {
    console.log(props)
    return (
        <input className={props.className === true ? "input_login" : "input_password"}
            placeholder={props.className === true ? "User Name" : "Password"} />
    );
};

export default InputLogin;