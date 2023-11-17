import './Field.css';

const FieldLabel = ({ formType, id, label }) => (
  <label className={`field-${formType}__label`} htmlFor={id}>
    {label}
  </label>
);

const FieldInput = ({ formType, id, label, ...props }) => (
  <input
    className={`page__input field__input field-${formType}__input`}
    id={id}
    name={id}
    placeholder={label}
    {...props}
    required
    aria-describedby={`${id}-error`}
    aria-invalid="true"
  />
);

const FieldError = ({ id, error }) => (
  <span id={`${id}-error`} className="field__error">
    {error}
  </span>
);

function Field({ formType, id, label, error, ...props }) {
  return (
    <div className={`field field-${formType}`}>
      <FieldLabel formType={formType} id={id} label={label} />
      <FieldInput formType={formType} id={id} label={label} {...props} />
      <FieldError id={id} error={error} />
    </div>
  );
}

export default Field;
