import React, { useContext, useState, useEffect } from 'react';
import './Form.css';
import { useLocation } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';
import Tooltip from 'components/Tooltip/Tooltip';
import useForm from 'hooks/useForm';
import Field from 'components/Field/Field';

function Form({ formType, formValues, onSubmit }) {
  // Use destructuring to extract variables from useContext and useLocation
  const { pathname } = useLocation();
  const { isLoading, setState } = useContext(AppContext);

  // Destructure form, errors, isDirty, isValid, handleChange, and reset from useForm
  const { form, errors, isDirty, isValid, handleChange, reset } = useForm(
    formValues
  );

  // Use a more descriptive variable name for isEdit
  const [isEditing, setEditing] = useState(pathname !== '/profile');

  function handleSubmit(e) {
    e.preventDefault();

    if (pathname !== '/profile') return onSubmit(form);

    if (!isEditing) {
      setState('idle');
      return setEditing(true);
    }

    setEditing(false);
    onSubmit(form);
  }

  function handleCancel() {
    setEditing(false);
  }

  useEffect(() => {
    if (pathname === '/profile') reset(formValues);
    //eslint-disable-next-line
  }, [formValues, isEditing]);

  const submitText = {
    '/signup': isLoading ? 'Регистрация' : 'Зарегистрироваться',
    '/signin': isLoading ? 'Вход' : 'Войти',
    '/profile': getSubmitText(),
  };

  function getSubmitText() {
    if ((isDirty && isEditing) || isEditing) return 'Сохранить';
    if (isLoading) return 'Сохранение';
    return 'Редактировать';
  }

  const fields = [
    {
      id: 'name',
      label: 'Имя',
      type: 'text',
      minLength: 2,
      maxLength: 30,
    },
    {
      label: 'E-mail',
      id: 'email',
      type: 'email',
      pattern: '^\\S+@\\S+\\.\\S+$',
    },
    {
      label: 'Пароль',
      id: 'password',
      type: 'password',
      minLength: 3,
      maxLength: 24,
    },
  ];

  const renderField = (item) => (
    <Field
      key={item.id}
      formType={formType}
      value={form[item.id] || ''}
      error={errors[item.id] || ''}
      readOnly={!isEditing}
      onChange={handleChange}
      {...item}
    />
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`form form_type_${formType}`}
      noValidate
    >
      <div className="form__fields">
        {pathname === '/signup' && fields.map(renderField)}
        {pathname === '/signin' && fields.slice(1, 3).map(renderField)}
        {pathname === '/profile' && fields.slice(0, 2).map(renderField)}
      </div>
      <Tooltip />
      <div className="form__bottom">
        <button
          type="submit"
          className={`page__button form__submit form__${formType}-submit ${
            isLoading ? 'form__submit_is-loading' : ''
          }`}
          disabled={!isValid || (!isDirty && isEditing)}
          aria-describedby="description"
        >
          {submitText[pathname]}
        </button>
        {pathname === '/profile' && isEditing && (
          <button
            className={`page__button form__${formType}-cancel`}
            onClick={handleCancel}
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
