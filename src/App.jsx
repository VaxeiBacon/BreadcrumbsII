import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './Landing'
import Places from './Places'
import Gastronomy from './Gastronomy'
import Lodging from './Lodging'
import Error404 from './Error404'
import Error403 from './Error403'
import LoginAdmin from './LoginAdmin'

export default function App() {
  return (
    <Routes>
      {/* 1. RUTAS OFICIALES (Llimpias y sin el #) */}
      <Route path="/" element={<Landing />} />
      <Route path="/inicio/descubrir" element={<Landing />} />
      <Route path="/inicio/descubrir/places" element={<Places />} />
      <Route path="/inicio/descubrir/gastronomy" element={<Gastronomy />} />
      <Route path="/inicio/descubrir/lodging" element={<Lodging />} />
      
      {/* Rutas administrativas y de error */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/403" element={<Error403 />} />

      {/* 2. SOPORTE PARA ENLACES VIEJOS (Redirecciones automáticas) */}
      {/* Si alguien entra a /places o /lugares, se le mueve elegantemente al nuevo formato */}
      <Route path="/places" element={<Navigate to="/inicio/descubrir/places" replace />} />
      <Route path="/lugares" element={<Navigate to="/inicio/descubrir/places" replace />} />
      <Route path="/gastronomia" element={<Navigate to="/inicio/descubrir/gastronomy" replace />} />
      <Route path="/hospedaje" element={<Navigate to="/inicio/descubrir/lodging" replace />} />

      {/* 3. CAPTURA UNIVERSAL DE 404 (Cualquier ruta no registrada arriba) */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}