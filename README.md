# 🐾 Veterinaria San Marcos
 
Aplicación web en React para la gestión de servicios y citas de la Veterinaria San Marcos. Proyecto del curso DSY1104 – Desarrollo FullStack II.
 
---
 
## 👥 Equipo
 
**Nombre del equipo:** `Equipo N°6`
 
| Integrante | Correo institucional |
|---|---|
| `Cristian Aburto` | `cr.aburto@duocuc.cl` |
 
---
 
## 📋 Caso
 
**Forma A – Veterinaria San Marcos**
 
## 📝 Descripción del caso
 
Veterinaria San Marcos es una clínica ubicada en Rancagua, fundada en 2009, que atiende alrededor de 25 pacientes al día (perros, gatos, conejos y aves). Su gestión era manual, con agenda en papel y fichas físicas, lo que provocaba citas duplicadas, pérdida de información y un 20% de inasistencias. La aplicación permite consultar el catálogo de servicios, solicitar citas en línea, ver su estado y administrar los servicios desde un panel.
 
---
 
## ✨ Funcionalidades
 
- Catálogo de servicios con tarjetas responsivas (datos del Excel del caso).
- Solicitud de cita con validación de campos y control de horarios ocupados.
- Pantallas de cita confirmada y de cita no agendada.
- Listado de citas con estado (Pendiente, Confirmada, Rechazada).
- Panel de administración con CRUD de servicios (crear, listar, editar, eliminar).
- Inicio de sesión con validación en React.
- Persistencia simulada con `localStorage` (sin backend, según el alcance del Parcial 2).
- Diseño responsivo con React Bootstrap (móvil, tablet y escritorio).
## 🗺️ Rutas
 
| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/servicios` | Catálogo de servicios |
| `/solicitar-cita` | Formulario de solicitud de cita |
| `/cita-confirmada` | Confirmación de la solicitud |
| `/cita-no-agendada` | Error al agendar |
| `/mis-citas` | Listado de citas y su estado |
| `/admin/servicios` | Panel de administración (CRUD) |
| `/login` | Inicio de sesión |
 
---
 
## 🗂️ Estructura del proyecto
 
El proyecto sigue **Atomic Design**. Los datos y el CRUD viven fuera de `components`.
 
```
src/
├── components/
│   ├── atoms/
│   │   ├── Boton.jsx
│   │   ├── CampoTexto.jsx
│   │   └── EtiquetaEspecie.jsx
│   ├── molecules/
│   │   ├── LoginField.jsx
│   │   ├── TarjetaServicio.jsx
│   │   └── TarjetaServicio.test.jsx
│   ├── organisms/
│   │   ├── Footer.jsx
│   │   ├── FormularioServicio.jsx
│   │   ├── FormularioSolicitudCita.jsx
│   │   ├── ListaServicios.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   └── TablaServicios.jsx
│   └── templates/
│       └── PlantillaPublica.jsx
├── pages/
│   ├── AdminServicios.jsx
│   ├── CitaConfirmada.jsx
│   ├── CitaNoAgendada.jsx
│   ├── Inicio.jsx
│   ├── Login.jsx
│   ├── MisCitas.jsx
│   ├── Servicios.jsx
│   └── SolicitarCita.jsx
├── data/
│   └── servicios.json          # Datos de partida (del Excel del caso)
├── services/                   # CRUD en JavaScript puro (localStorage)
│   ├── servicioService.js
│   ├── servicioService.test.js
│   ├── citaService.js
│   └── citaService.test.js
├── context/
│   └── ServiciosContext.jsx    # Estado compartido del catálogo
├── utils/
│   ├── formato.js              # Formato de precios en CLP
│   ├── formato.test.js
│   ├── precios.js              # Regla de urgencia (+$10.000)
│   └── precios.test.js
├── App.jsx
├── main.jsx
└── setupTests.js
```
 
---
 
## 🛠️ Tecnologías utilizadas
 
- **React** – interfaz de usuario
- **Vite** – entorno de desarrollo y empaquetado
- **React Bootstrap / Bootstrap** – componentes y diseño responsivo
- **React Router DOM** – navegación entre páginas
- **Vitest** – pruebas unitarias
- **Testing Library (React y jest-dom)** – pruebas de componentes
- **jsdom** – entorno de navegador simulado para las pruebas
- **@vitest/coverage-v8** – informe de cobertura
---
 
## ▶️ Cómo ejecutar el proyecto
 
Requisito: tener [Node.js](https://nodejs.org/) instalado.
 
```bash
# 1. Clonar el repositorio
git clone https://github.com/krysmoke/VetSanMarcos-Desarrollo-FullStack2.git
 
# 2. Entrar a la carpeta
cd VetSanMarcos-Desarrollo-FullStack2
 
# 3. Instalar dependencias
npm install
 
# 4. Ejecutar en modo desarrollo
npm run dev
```
 
Abrir en el navegador la dirección que indica la terminal (por defecto `http://localhost:5173`).
 
## 🧪 Cómo ejecutar las pruebas
 
```bash
# Ejecutar las pruebas unitarias
npm test
 
# Ejecutar las pruebas con informe de cobertura
npm run coverage
```
 
El informe de cobertura también se genera en HTML dentro de la carpeta `coverage/` (abrir `coverage/index.html`).
 
**Resultado actual:** 5 archivos de prueba, 16 pruebas, todas pasan.
 
---
 
## 📎 Material complementario
 
Documentos del semestre (ERS versión 2, informe de pruebas y cobertura, etc.):
 
🔗 `https://drive.google.com/drive/folders/1dUinM-l20SBO7lzbZTm63pDsYIVJRVnf?usp=drive_link`
