import logoRozetka from '../../img/logoRozetka.png';
import './Login.css';
import LoginCard from '../../components/LoginCard';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';

function Login() {
  return (
    <div className="page">
      <LoginCard />
      <div className="card">
        <img src={logoRozetka} className="login-logo" alt="logo" />
        <Input className={true} />
        <Input className={false} />
        <Button />
      </div>
    </div>
  );
};

export default Login;
