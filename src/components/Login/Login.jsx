import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logo from '../../images/header_logo.svg';
import './Login.css';

function Login({ onSubmit }) {
  const navigate = useNavigate();
  const { email } = useContext(CurrentUserContext);

  const handleSubmit = () => {
    onSubmit();
    navigate('/');
  };

  const renderLogoLink = () => (
    <Link to={'/'} className="login__link">
      <img src={logo} alt="Логотип" className="login__logo" />
    </Link>
  );

  const renderForm = () => (
    <Form
      formType="auth"
      formValues={{ email, password: '' }}
      onSubmit={handleSubmit}
    />
  );

  const renderSignupSection = () => (
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
        {renderLogoLink()}
        <h1 className="login__header">Рады видеть!</h1>
        {renderForm()}
        {renderSignupSection()}
      </div>
    </main>
  );
}

export default Login;
