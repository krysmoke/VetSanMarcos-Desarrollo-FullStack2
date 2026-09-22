import { useEffect } from 'react';
import LoginForm from '../components/organisms/LoginForm';

const Login = () => {
  useEffect(() => {
    console.log('el componente se montó');
  }, []);

  const handleLogin = async (credentials) => {
    console.log('Enviando credenciales:', credentials);
    // Aquí va la llamada real, ej: await authService.login(credentials)
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default Login;