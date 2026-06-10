import React from 'react'
import './error.css'
import slrcLogo from './assets/SLRCLogo.webp'
import logotipo from './assets/logotipoempresa.png'

export default function Error404() {
  return (
    <div className="error-page" id="top">
      <header className="error-header">
        <div className="error-header-inner">
          <div className="error-logo-group">
            <a href="#/inicio/descubrir" className="logo-link">
              <img src={slrcLogo} alt="San Luis Río Colorado" className="error-brand-logo" />
            </a>
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
            <a href="#/inicio/descubrir" className="error-btn error-btn-primary">
              Volver al Inicio
            </a>
            <a href="#/inicio/descubrir/places" className="error-btn error-btn-secondary">
              Explorar Lugares
            </a>
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
