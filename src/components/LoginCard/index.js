import './style.css';
import logoRozetka from '../../img/logoRozetka.png';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const LoginCard = () => {
    return (
        <div id="login-card">
            <img src={logoRozetka} className="login-logo" alt="logo" />
            <Input isLogin />
            <Input isLogin={false} />
            <ImEye className='eaeOpen' />
            <ImEyeBlocked className='eaeClose' />
            <Button isLogin >Login</Button>
        </div >
    );
};

export default LoginCard;