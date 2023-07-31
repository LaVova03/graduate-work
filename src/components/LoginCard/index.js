import './style.css';
import logoRozetka from '../../img/logoRozetka.png';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

const LoginCard = () => {
    return (
        <div id="login-card">
            <img src={logoRozetka} className="login-logo" alt="logo" />
            <Input isLogin={true} />
            <Input isPassword={true} />
            <Button />
        </div >
    );
};

export default LoginCard;