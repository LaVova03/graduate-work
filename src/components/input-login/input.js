import './input.css';

const InputLogin = (props) => {
    console.log(props)
    return (
        <input className={props.style === true ? "input-two" : "input-one"}
            placeholder={props.style === true ? "Password" : "User Name"} />
    );
};

export default InputLogin;