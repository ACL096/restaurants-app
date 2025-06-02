import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Restaurants App</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/search">Buscar</Link>
          <Link className="nav-link" to="/new">Nuevo Restaurante</Link>
        </div>
      </div>
    </nav>
  )
}

