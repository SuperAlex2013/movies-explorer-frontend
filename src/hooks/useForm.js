import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  // State management for form fields, errors, dirty status, and validity
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState(false);
  const [isValid, setIsValid] = useState(true);

  // Function to handle input changes
  const handleChange = (e) => {
    const input = e.target;

    // Update errors object with validation messages
    setErrors({
      ...errors,
      [input.name]: input.validationMessage,
    });

    // Update form state with the input's value
    setForm({
      ...form,
      [input.name]: input.value,
    });

    // Check if the input is dirty (value changed)
    setIsDirty(initialState[input.name] !== input.value);

    // Check the overall form validity
    setIsValid(input.form.checkValidity());
  };

  // Function to reset form values, errors, dirty status, and validity
  const reset = (values) => {
    setForm(values);
    setErrors({});
    setIsDirty(false);
    setIsValid(true);
  };

  // Return the form-related functions and state
  return {
    form,
    errors,
    isDirty,
    isValid,
    handleChange,
    reset,
  };
};

export default useForm;
