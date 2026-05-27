import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import logotipo from './assets/logotipoempresa.png'
import slrcLogo from './assets/SLRCLogo.webp'

const hotels = [
  {
    title: '653 Hotel',
    subtitle: 'Confort moderno y servicios de calidad en el corazón de la ciudad.',
    image: 'https://images.trvl-media.com/lodging/97000000/96720000/96711600/96711564/d4120b82.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
  },
  {
    title: 'Hotel Araiza',
    subtitle: 'Alojamiento de confianza con excelente ubicación y atención personalizada.',
    image: 'https://x.cdrst.com/foto/hotel-sf/c3a93/granderesp/hotel-araiza-san-luis-r-c-general-10d2321c.jpg',
  },
  {
    title: 'Hotel Mirra',
    subtitle: 'Hospedaje acogedor con comodidades pensadas para tu descanso.',
    image: 'https://images.trvl-media.com/lodging/17000000/16720000/16713300/16713210/20df2030.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
  },
  {
    title: 'Hotel San Angel y Spa',
    subtitle: 'Lujo y relajación en un ambiente elegante con servicios de spa.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/7b/28/ac/hotel-san-angel.jpg?w=900&h=500&s=1',
  },
  {
    title: 'Hotel Casablanca',
    subtitle: 'Un refugio cómodo con estilo y ambiente acogedor para tu estadía.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/de/ee/2c/hotel-entrance.jpg?w=900&h=500&s=1',
  },
  {
    title: 'Hotel Imperial',
    subtitle: 'Elegancia y confort en cada detalle de tu experiencia de hospedaje.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c3/1f/e8/esto-es-algo-de-lo-que.jpg?w=900&h=500&s=1',
  },
]

export default function Lodging() {
  return (
    <div className="places-page" id="top">
      <header className="places-header">
        <div className="places-header-inner">
          <div className="places-logo-group">
            <img src={slrcLogo} alt="San Luis Río Colorado" className="brand-logo slrc-logo" />
            <img src={logotipo} alt="Logotipo de la empresa" className="brand-logo company-logo" />
          </div>
          <nav className="places-nav">
            <a href="#/inicio/descubrir">Inicio</a>
            <a href="#/inicio/descubrir/gastronomy">Gastronomía</a>
            <a href="#/inicio/descubrir/places">Lugares</a>
          </nav>
        </div>
      </header>

      <section className="places-hero" style={{ backgroundImage: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bd/3b/cf/hotel-san-angel.jpg?w=900&h=500&s=1)` }}>
        <div className="places-hero-overlay" />
        <div className="places-hero-copy">
          <span className="eyebrow">Hospedaje</span>
          <h1>Opciones de alojamiento</h1>
          <p>Encuentra el hospedaje perfecto para tu estancia en San Luis Río Colorado con confort y excelente servicio.</p>
        </div>
      </section>

      {/* Insertado exactamente debajo del Hero */}
      <Breadcrumbs />

      <main className="places-main container" id="hospedaje">
        <div className="places-grid">
          {hotels.map((hotel) => (
            <article
              key={hotel.title}
              className="place-card"
              style={{ backgroundImage: `url(${hotel.image})` }}
            >
              <div className="place-card-overlay" />
              <div className="place-card-content">
                <h3>{hotel.title}</h3>
                <p>{hotel.subtitle}</p>
                <a className="btn place-cta" href="#contact">Más detalles</a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}