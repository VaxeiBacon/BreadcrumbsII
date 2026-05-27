import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import logotipo from './assets/logotipoempresa.png'
import slrcLogo from './assets/SLRCLogo.webp'
import hero from './assets/hero.jpg'

const places = [
  {
    title: 'La Ciudad',
    subtitle: 'Explora el corazón urbano con su historia y arquitectura local.',
    image: 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2020/07/iglesia-inmaculada-aerea.jpg?ssl=1',
  },
  {
    title: 'Ciénega de Santa Clara',
    subtitle: 'Admira el paisaje natural que se forma en la ciénega.',
    image: 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/1.jpg?ssl=1',
  },
  {
    title: 'Golfo de Santa Clara',
    subtitle: 'Disfruta la costa y el ambiente tranquilo frente al golfo.',
    image: 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/21.jpg?ssl=1',
  },
  {
    title: 'La Salina',
    subtitle: 'Conoce el encanto del salar y sus horizontes sorprendentes.',
    image: 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/29.jpg?ssl=1',
  },
  {
    title: 'Valle Agrícola',
    subtitle: 'Camina entre campos abiertos y tradiciones agrícolas.',
    image: 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/34.jpg?ssl=1',
  },
  {
    title: 'Zona Desierto',
    subtitle: 'Vive el contraste de dunas y tonos cálidos en el desierto.',
    image: 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/7.jpg?ssl=1',
  },
]

export default function Places() {
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
            <a href="#/inicio/descubrir/lodging">Hospedaje</a>
          </nav>
        </div>
      </header>

      <section className="places-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="places-hero-overlay" />
        <div className="places-hero-copy">
          <span className="eyebrow">Descubre</span>
          <h1>Lugares para visitar</h1>
          <p>Explora los rincones más icónicos de San Luis Río Colorado en una sola experiencia.</p>
        </div>
      </section>

      {/* Insertado exactamente debajo del Hero */}
      <Breadcrumbs />

      <main className="places-main container" id="lugares">
        <div className="places-grid">
          {places.map((place) => (
            <article className="place-card" key={place.title} style={{ backgroundImage: `url(${place.image})` }}>
              <div className="place-card-overlay" />
              <div className="place-card-content">
                <h3>{place.title}</h3>
                <p>{place.subtitle}</p>
                <a className="btn place-cta" href="#contact">Más detalles</a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}