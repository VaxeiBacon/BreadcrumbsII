import React from 'react'
import { Link } from 'react-router-dom' // <--- 1. Importamos Link
import './error.css'
import slrcLogo from './assets/SLRCLogo.webp'
import logotipo from './assets/logotipoempresa.png'

export default function Error404() {
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
          <div className="error-code">404</div>
          <h1 className="error-title">Página No Encontrada</h1>
          <p className="error-description">
            Lo sentimos, la página que buscas no existe. Puede que haya sido movida o eliminada.
          </p>
          <div className="error-actions">
            {/* 3. Limpiamos los botones de navegación del cuerpo */}
            <Link to="/inicio/descubrir" className="error-btn error-btn-primary">
              Volver al Inicio
            </Link>
            <Link to="/inicio/descubrir/places" className="error-btn error-btn-secondary">
              Explorar Lugares
            </Link>
          </div>
        </div>

        <div className="error-illustration">
          <div className="illustration-404">
            <span>4</span>
            <div className="circle"></div>
            <span>4</span>
          </div>
        </div>
      </main>

      <footer className="error-footer">
        <p>&copy; 2025 San Luis Río Colorado Turismo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}