import React from 'react'
import { Link } from 'react-router-dom' // <--- 1. Importamos el componente oficial de enlaces
import './error.css'
import slrcLogo from './assets/SLRCLogo.webp'
import logotipo from './assets/logotipoempresa.png'

export default function Error403() {
  return (
    <div className="error-page" id="top">
      <header className="error-header">
        <div className="error-header-inner">
          <div className="error-logo-group">
            {/* 2. Cambiamos 'a href' por 'Link to' sin el símbolo '#' */}
            <Link to="/inicio/descubrir" className="logo-link">
              <img src={slrcLogo} alt="San Luis Río Colorado" className="error-brand-logo" />
            </Link>
            <img src={logotipo} alt="Logotipo de la empresa" className="error-brand-logo company-logo" />
          </div>
        </div>
      </header>

      <main className="error-container">
        <div className="error-content">
          <div className="error-code error-code-403">403</div>
          <h1 className="error-title">Acceso Denegado</h1>
          <p className="error-description">
            No tienes permisos para acceder a este recurso. Si crees que esto es un error, contacta con el administrador.
          </p>
          <div className="error-actions">
            {/* 3. Limpiamos también los botones de acción principales */}
            <Link to="/inicio/descubrir" className="error-btn error-btn-primary">
              Volver al Inicio
            </Link>
            <Link to="/inicio/descubrir/places" className="error-btn error-btn-secondary">
              Explorar Lugares
            </Link>
          </div>
        </div>

        <div className="error-illustration">
          <div className="illustration-403">
            <div className="lock-icon">
              <div className="lock-body"></div>
              <div className="lock-shackle"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="error-footer">
        <p>&copy; 2025 San Luis Río Colorado Turismo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}