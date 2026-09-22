import InputField from '../atoms/ImputField';

const LoginFields = ({ formData, errors, onChange }) => {
  return (
    <>
      <InputField
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="nombre@correo.com"
        value={formData.email}
        onChange={onChange}
        isInvalid={!!errors.email}
        errorMessage={errors.email}
      />
      <InputField
        label="Contraseña"
        type="password"
        name="password"
        placeholder="********"
        value={formData.password}
        onChange={onChange}
        isInvalid={!!errors.password}
        errorMessage={errors.password}
      />
    </>
  );
};

export default LoginFields;