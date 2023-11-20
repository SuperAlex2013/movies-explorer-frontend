import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import logo from 'images/header_logo.svg';
import Form from 'components/Form/Form';
import './Login.css';

function Login({ onSubmit }) {
  const { email } = useContext(CurrentUserContext);

  // Function to render the header logo and link
  const renderHeader = () => (
    <Link to={'/'} className="login__link">
      <img src={logo} alt="Логотип" className="login__logo" />
    </Link>
  );

  // Function to render the title
  const renderTitle = () => (
    <h1 className="register__title">Рады видеть!</h1>
  );

  // Function to render the Form component
  const renderForm = () => (
    <Form
      formType="auth"
      formValues={{ email, password: '' }}
      onSubmit={onSubmit}
    />
  );

  // Function to render the signup text and link
  const renderSignup = () => (
    <div className="login__signup">
      <p className="login__signup-text">Ещё не зарегистрированы?</p>
      <Link to="/signup" className="page__link login__signup-link">
        Регистрация
      </Link>
    </div>
  );

  return (
    <main className="login">
      <div className="login__container">
        {renderHeader()}
        {renderTitle()}
        {renderForm()}
        {renderSignup()}
      </div>
    </main>
  );
}

export default Login;
