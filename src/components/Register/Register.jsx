// Refactored JSX for Register Component

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import Form from '../Form/Form';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import './Register.css';

function Register({ onSubmit }) {
  const currentUser = useContext(CurrentUserContext);

  const renderForm = () => (
    <Form formType="auth" formValues={currentUser} onSubmit={onSubmit} />
  );

  const renderSignInLink = () => (
    <div className="register__login">
      <p className="register__login-text">Уже зарегистрированы?</p>
      <Link to="/signin" className="page__link register__login-link">
        Войти
      </Link>
    </div>
  );

  return (
    <main className="register">
      <div className="register__box">
        <Logo />
        <h1 className="register__heading">Добро пожаловать!</h1>
        {renderForm()}
        {renderSignInLink()}
      </div>
    </main>
  );
}

export default Register;
