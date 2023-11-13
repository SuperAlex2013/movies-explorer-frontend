import React, { useContext, useEffect } from 'react';
import './Form.css';

import { useLocation } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';
import Tooltip from 'components/Tooltip/Tooltip';
import useForm from 'hooks/useForm';
import Field from 'components/Field/Field';

// Component for rendering individual form fields
const FormField = ({ formType, form, errors, handleChange, item }) => (
  <Field
    key={item.id}
    formType={formType}
    value={form[item.id] || ''}
    error={errors[item.id] || ''}
    onChange={handleChange}
    {...item}
  />
);

// Component for rendering the submit button
const SubmitButton = ({ isLoading, isValid, formType, submitText, pathname }) => (
  <button
    type="submit"
    className={`page__button form-submit form-${formType}-submit ${
      isLoading ? 'form-submit-loading' : ''
    }`}
    disabled={!isValid}
    aria-describedby="description"
  >
    {submitText[pathname]}
  </button>
);

// Main Form component
function Form({ formType, formValues, onSubmit }) {
  const { pathname } = useLocation();
  const { isLoading } = useContext(AppContext);

  const { form, errors, isValid, handleChange, handleSubmit, setInitialState } =
    useForm(onSubmit);

  // Setting initial form state
  useEffect(() => {
    setInitialState(formValues);
    //eslint-disable-next-line
  }, [formValues]);

  // Text for the submit button based on form state
  const submitText = {
    '/signup': isLoading ? 'Регистрация' : 'Зарегистрироваться',
    '/signin': isLoading ? 'Вход' : 'Войти',
    '/profile': isLoading ? 'Сохранение' : 'Редактировать',
  };

  // Field configuration
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

  // Determine which fields to render based on the form type
  const fieldsToRender = () => {
    switch (pathname) {
      case '/signup':
        return fields;
      case '/signin':
        return fields.slice(1);
      case '/profile':
        return fields.slice(0, 2);
      default:
        return [];
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form-container form-${formType}`}
      noValidate
    >
      <div className="form-fields">
        {fieldsToRender().map((item) => (
          <FormField
            key={item.id}
            formType={formType}
            form={form}
            errors={errors}
            handleChange={handleChange}
            item={item}
          />
        ))}
      </div>
      <Tooltip>
        <p className="tooltip__error-text" id="description">
          При регистрации пользователя произошла ошибка.
        </p>
      </Tooltip>
      <SubmitButton
        isLoading={isLoading}
        isValid={isValid}
        formType={formType}
        submitText={submitText}
        pathname={pathname}
      />
    </form>
  );
}

export default Form;
