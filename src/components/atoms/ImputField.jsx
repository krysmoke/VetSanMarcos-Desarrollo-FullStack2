import Form from 'react-bootstrap/Form';

const InputField = ({ label, type = 'text', name, value, onChange, placeholder, isInvalid, errorMessage, ...props }) => {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
        {...props}
      />
      {isInvalid && (
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputField;