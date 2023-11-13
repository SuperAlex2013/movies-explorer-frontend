import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';

import Form from 'components/Form/Form';
import { CurrentUserContext } from 'contexts/CurrentUserContext';


function Profile({ onSubmit, onLogout }) {
  const navigate = useNavigate();
  const { name, email } = useContext(CurrentUserContext);

  const handleLogout = () => {
    onLogout();
    navigate('/signin');
  };

  return (
    <main className="profile">
      <div className="profile__container">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>
        <Form
          formType="profile"
          formValues={{ name, email }}
          onSubmit={onSubmit}
        />
        <div className="profile__logout">
          <button
            className="page__link profile__logout-link"
            onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
