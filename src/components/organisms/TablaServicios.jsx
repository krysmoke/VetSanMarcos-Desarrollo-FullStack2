import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { formatearPrecio } from '../../utils/formato'

const TablaServicios = ({ servicios, onEditar, onEliminar }) => {
  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Especie</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {servicios.map((s) => (
          <tr key={s.codigo}>
            <td>{s.codigo}</td>
            <td>{s.nombre}</td>
            <td>{s.categoria}</td>
            <td>{s.especie}</td>
            <td>{formatearPrecio(s.precio)}</td>
            <td className="text-nowrap">
              <Button size="sm" variant="outline-primary" className="me-2"
                onClick={() => onEditar(s)}>Editar</Button>
              <Button size="sm" variant="outline-danger"
                onClick={() => onEliminar(s)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TablaServicios