import LoginForm from '../components/organisms/LoginForm';

const Login = () => {
  const handleLogin = async (credentials) => {
    console.log('Enviando credenciales:', credentials);
    // Aquí va la llamada real, ej: await authService.login(credentials)
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default Login;