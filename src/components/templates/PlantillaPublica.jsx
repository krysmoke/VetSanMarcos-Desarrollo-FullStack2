import NavbarPrincipal from '../organisms/Navbar'
import Footer from '../organisms/Footer'

const PlantillaPublica = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarPrincipal />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PlantillaPublica