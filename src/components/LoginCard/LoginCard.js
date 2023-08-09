import './LoginCard.css';
import logoRozetka from '../../assets/logoRozetka.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const LoginCard = () => {
    return (
        <div id="login-card">
            <img src={logoRozetka} className="login-logo" alt="logo" />
            <Input isLogin />
            <Input isLogin={false} isPassword/>
            <Button isLogin >Login</Button>
        </div >
    );
};

export default LoginCard;