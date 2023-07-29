import logoRozetka from '../../img/logoRozetka.png';
import './Login.css';
import PageOne from '../../components/page-one';
import PageOneTwo from '../../components/page-one-two';
import InputLogin from '../../components/input-login/input';
import Button from '../../components/button-login/button';

function Login() {
  return (
    <label>
      <PageOne />
      <PageOneTwo />
      <InputLogin style={false} />
      <InputLogin style={true} />
      <img src={logoRozetka} className="login-logo" alt="logo" />
      <Button />
    </label>
  );
};

export default Login;
