import React, { useContext } from 'react';
import './Profile.css';
import Form from 'components/Form/Form';
import { CurrentUserContext } from 'contexts/CurrentUserContext';

function Profile({ onSubmit, onLogout }) {
  const { name, email } = useContext(CurrentUserContext);

  const renderTitle = () => {
    return <h1 className="profile__title">{`Привет, ${name}!`}</h1>;
  };

  const renderForm = () => {
    return (
      <Form
        formType="profile"
        formValues={{ name, email }}
        onSubmit={onSubmit}
      />
    );
  };

  const renderLogoutButton = () => {
    return (
      <div className="profile__logout">
        <button
          className="page__button profile__logout-button"
          onClick={onLogout}
        >
          Выйти из аккаунта
        </button>
      </div>
    );
  };

  return (
    <main className="profile">
      <div className="profile__container">
        {renderTitle()}
        {renderForm()}
        {renderLogoutButton()}
      </div>
    </main>
  );
}

export default Profile;
