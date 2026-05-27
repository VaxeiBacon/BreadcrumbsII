import React from 'react'

export default function Breadcrumbs() {
  const rawPath = window.location.hash.slice(1) || '/inicio/descubrir'
  const pathnames = rawPath.split('/').filter((x) => x)

  const nameMap = {
    inicio: 'Inicio',
    descubrir: 'Descubrir',
    places: 'Lugares',
    gastronomy: 'Gastronomía',
    lodging: 'Hospedaje'
  }


  const handleLinkClick = (value) => {
    if (value.toLowerCase() === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb" style={{ padding: '20px 0', fontSize: '15px' }}>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `#/${pathnames.slice(0, index + 1).join('/')}`
        const displayName = nameMap[value.toLowerCase()] || value

        return last ? (
          <span key={to} className="breadcrumb-item active" style={{ color: '#333', fontWeight: '600' }}>
            {index > 0 && <span className="breadcrumb-divider" style={{ margin: '0 8px', color: '#999' }}>/</span>}
            {displayName}
          </span>
        ) : (
          <span key={to} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-divider" style={{ margin: '0 8px', color: '#999' }}>/</span>}
            <a 
              href={to} 
              onClick={() => handleLinkClick(value)} 
              style={{ textDecoration: 'none', color: '#0076a3', fontWeight: '500' }}
            >
              {displayName}
            </a>
          </span>
        )
      })}
    </nav>
  )
}