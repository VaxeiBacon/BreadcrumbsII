import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()
  
  const rawPath = location.pathname || '/inicio/descubrir'
  const pathnames = rawPath.split('/').filter((x) => x)

  const nameMap = {
    inicio: 'Inicio',
    descubrir: 'Descubrir',
    places: 'Lugares',
    gastronomy: 'Gastronomía',
    lodging: 'Hospedaje',
    admin: 'Administración',
    login: 'Login'
  }

  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb" style={{ padding: '20px 0', fontSize: '15px' }}>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const lowerValue = value.toLowerCase()
        const displayName = nameMap[lowerValue] || value

        // 1. Corregimos la ruta destino: Si el segmento es "inicio", lo mandamos directo a la landing completa
        const to = lowerValue === 'inicio' ? '/inicio/descubrir' : `/${pathnames.slice(0, index + 1).join('/')}`

        // Manejador de clic inteligente para controlar el comportamiento del scroll
        const handleLinkClick = (e) => {
          // Si el destino es la Landing y el usuario YA está ahí, bloqueamos el salto y subimos suavemente
          if (to === '/inicio/descubrir' && location.pathname === '/inicio/descubrir') {
            e.preventDefault()
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        }

        // 2. Si es el último elemento en una subpágina (ej: "Lugares"), se queda estático
        // PERO si estamos en la Landing (/inicio/descubrir), hacemos interactivos los elementos para que sirvan de "subir"
        const renderAsLink = !last || (location.pathname === '/inicio/descubrir' && (lowerValue === 'inicio' || lowerValue === 'descubrir'))

        return !renderAsLink ? (
          <span key={to} className="breadcrumb-item active" style={{ color: '#333', fontWeight: '600' }}>
            {index > 0 && <span className="breadcrumb-divider" style={{ margin: '0 8px', color: '#999' }}>/</span>}
            {displayName}
          </span>
        ) : (
          <span key={to} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-divider" style={{ margin: '0 8px', color: '#999' }}>/</span>}
            <Link 
              to={to} 
              onClick={handleLinkClick} 
              style={{ 
                textDecoration: 'none', 
                color: last ? '#333' : '#0076a3', // Si es el activo en la landing, simula el color del texto base
                fontWeight: last ? '600' : '500' 
              }}
            >
              {displayName}
            </Link>
          </span>
        )
      })}
    </nav>
  )
}