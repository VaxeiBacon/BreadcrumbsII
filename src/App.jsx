import React, { useEffect, useState } from 'react'
import Landing from './Landing'
import Places from './Places'
import Gastronomy from './Gastronomy'
import Lodging from './Lodging'
import Error404 from './Error404'
import Error403 from './Error403'
import LoginAdmin from './LoginAdmin'

// Mapeamos las rutas basadas en la estructura hash: #/Inicio/Descubrir/interfaz
const routes = {
  'home': Landing,
  '/inicio/descubrir': Landing,
  '/inicio/descubrir/places': Places,
  '/inicio/descubrir/gastronomy': Gastronomy,
  '/inicio/descubrir/lodging': Lodging,
  '/error/404': Error404,
  '/error/403': Error403,
  '/admin/login': LoginAdmin,
}

function getRoute() {
  const rawHash = window.location.hash.slice(1) // Quitamos el '#'
  const hash = decodeURIComponent(rawHash).toLowerCase()

  // Si no hay hash, o apunta a secciones internas antiguos, mandamos a la landing principal
  if (!hash || hash === 'top' || hash === 'discover' || hash === 'gallery' || hash === 'contact') {
    return '/inicio/descubrir'
  }

  // Soporte por si diste clic en un enlace viejo de tipo antiguo (#lugares, #gastronomia, #hospedaje)
  if (hash === 'lugares' || hash === 'places') return '/inicio/descubrir/places'
  if (hash === 'gastronomia' || hash === 'gastronomía') return '/inicio/descubrir/gastronomy'
  if (hash === 'hospedaje' || hash === 'lodging') return '/inicio/descubrir/lodging'

  return routes[hash] ? hash : '/inicio/descubrir'
}

function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Si la ruta actual es la landing pero trae un anclaje antiguo de sección,
  // permitimos que cargue la Landing component normalmente
  const Page = routes[route] || Landing
  
  return <Page />
}

export default App