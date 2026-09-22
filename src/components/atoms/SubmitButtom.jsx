import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const SubmitButton = ({ text = 'Ingresar', loading = false, ...props }) => {
  return (
    <Button type="submit" variant="primary" className="w-100" disabled={loading} {...props}>
      {loading ? (
        <>
          <Spinner as="span" animation="border" size="sm" className="me-2" />
          Ingresando...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;