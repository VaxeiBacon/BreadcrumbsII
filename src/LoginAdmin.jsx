import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // <--- 1. Importaciones oficiales para rutas y navegación
import './admin.css'
import slrcLogo from './assets/SLRCLogo.webp'
import logotipo from './assets/logotipoempresa.png'

export default function LoginAdmin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate() // <--- 2. Inicialización del hook de navegación programática

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulamos una validación simple
    // En producción, esto se conectaría a un backend
    setTimeout(() => {
      if (!email || !password) {
        setError('Por favor completa todos los campos')
        setIsLoading(false)
        return
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Por favor ingresa un email válido')
        setIsLoading(false)
        return
      }

      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres')
        setIsLoading(false)
        return
      }

      // Aquí iría la lógica de autenticación real
      console.log('Intento de login:', { email, password })
      
      // 3. Redirección limpia al dashboard administrativo usando la API de React Router
      navigate('/admin/dashboard')
      
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="admin-page" id="top">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-logo-group">
            {/* 4. Enlace del logo limpio */}
            <Link to="/inicio/descubrir" className="logo-link">
              <img src={slrcLogo} alt="San Luis Río Colorado" className="admin-brand-logo" />
            </Link>
            <img src={logotipo} alt="Logotipo de la empresa" className="admin-brand-logo company-logo" />
          </div>
          <div className="admin-badge">Panel de Administración</div>
        </div>
      </header>

      <main className="admin-container">
        <div className="login-wrapper">
          <div className="login-card">
            <div className="login-header">
              <h1>Acceso Administrativo</h1>
              <p>Ingresa tus credenciales para continuar</p>
            </div>

            {error && <div className="login-error">{error}</div>}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@sanluisrc.mx"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loader"></span>
                    Verificando...
                  </>
                ) : (
                  'Ingresar'
                )}
              </button>
            </form>

            <div className="login-footer">
              {/* 5. Enlace inferior limpio hacia el inicio */}
              <p>¿Problemas para acceder? <Link to="/inicio/descubrir">Contacta soporte</Link></p>
            </div>
          </div>

          <div className="login-illustration">
            <div className="security-icon">
              <div className="shield-main">
                <div className="shield-accent"></div>
              </div>
            </div>
            <h3>Área Protegida</h3>
            <p>Acceso exclusivo para administradores del sistema</p>
          </div>
        </div>
      </main>

      <footer className="admin-footer">
        <p>&copy; {new Date().getFullYear()} San Luis Río Colorado Turismo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}