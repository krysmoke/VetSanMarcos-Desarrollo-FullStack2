import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import TablaServicios from '../components/organisms/TablaServicios'
import FormularioServicio from '../components/organisms/FormularioServicio'
import { useServicios } from '../context/ServiciosContext'

const AdminServicios = () => {
  const { servicios, crearServicio, actualizarServicio, eliminarServicio } = useServicios()
  const [formulario, setFormulario] = useState(null) // null | 'nuevo' | servicio
  const [error, setError] = useState('')

  const cerrar = () => {
    setFormulario(null)
    setError('')
  }

  const handleGuardar = (datos) => {
    try {
      if (formulario === 'nuevo') {
        crearServicio(datos)
      } else {
        actualizarServicio(datos.codigo, datos)
      }
      cerrar()
    } catch (e) {
      setError(e.message)
    }
  }

  const handleEliminar = (servicio) => {
    if (window.confirm(`¿Eliminar "${servicio.nombre}"?`)) {
      eliminarServicio(servicio.codigo)
    }
  }

  return (
    <PlantillaPublica>
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Administrar servicios</h2>
          {!formulario && (
            <Button onClick={() => setFormulario('nuevo')}>+ Nuevo servicio</Button>
          )}
        </div>

        {formulario && (
          <FormularioServicio
            servicioInicial={formulario === 'nuevo' ? null : formulario}
            onGuardar={handleGuardar}
            onCancelar={cerrar}
            errorGeneral={error}
          />
        )}

        <TablaServicios
          servicios={servicios}
          onEditar={setFormulario}
          onEliminar={handleEliminar}
        />
      </Container>
    </PlantillaPublica>
  )
}

export default AdminServicios