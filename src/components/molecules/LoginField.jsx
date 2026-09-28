import CampoTexto from '../atoms/CampoTexto';

const LoginFields = ({ formData, errors, onChange }) => {
  return (
    <>
      <CampoTexto
        label="Correo electrónico"
        type="email"
        name="email"
        placeholder="nombre@correo.com"
        value={formData.email}
        onChange={onChange}
        isInvalid={!!errors.email}
        errorMessage={errors.email}
      />
      <CampoTexto
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