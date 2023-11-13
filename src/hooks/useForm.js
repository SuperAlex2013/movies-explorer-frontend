import { useState } from 'react';

const useForm = (onSubmit) => {
  // State management for form data, errors, and form validity
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value, validationMessage, form } = e.target;

    // Update errors and form data
    setErrors(prevErrors => ({ ...prevErrors, [name]: validationMessage }));
    setForm(prevForm => ({ ...prevForm, [name]: value }));

    // Update form validity
    setIsValid(form.checkValidity());
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  // Function to set initial form state
  const setInitialState = (initialState) => {
    setForm(initialState);
    setErrors({});
    setIsValid(true);
  };

  // Exposing form state and handlers
  return { form, errors, isValid, handleChange, handleSubmit, setInitialState };
};

export default useForm;
