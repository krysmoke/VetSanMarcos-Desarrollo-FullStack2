import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import LoginFields from '../molecules/LoginField';
import SubmitButton from '../atoms/SubmitButtom';

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'El correo es obligatorio.';
    if (!formData.password) newErrors.password = 'La contraseña es obligatoria.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        {/* col-12 en móvil, 8/12 en tablet, 4/12 en escritorio -> responsivo */}
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-sm p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Veterinaria San Marcos</h3>
              <Form onSubmit={handleSubmit} noValidate>
                <LoginFields formData={formData} errors={errors} onChange={handleChange} />
                <SubmitButton loading={loading} />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;