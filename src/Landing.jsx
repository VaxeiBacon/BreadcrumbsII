import React, { useEffect, useState, useRef } from 'react'
import Breadcrumbs from './Breadcrumbs'
import './landing.css'
import hero from './assets/hero.jpg'
import gallery1 from './assets/gallery-1.webp'
import gallery2 from './assets/gallery-2.webp'
import activityImage from './assets/feature-activities.jpg'
import foodImage from './assets/feature-food.jpg'
import lodgingImage from './assets/feature-lodging.webp'
import slrcLogo from './assets/SLRCLogo.webp'
import logotipo from './assets/logotipoempresa.png'

export default function Landing() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  const slides = [hero, gallery1, gallery2, 'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/valle-de-san-luis-2.jpg?ssl=1']
  const [index, setIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const galleryImages = [
    'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2020/07/iglesia-inmaculada-aerea.jpg?ssl=1',
    'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/1.jpg?ssl=1',
    'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/21.jpg?ssl=1',
    'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/29.jpg?ssl=1',
    'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/34.jpg?ssl=1',
    'https://i0.wp.com/visitsanluisrc.mx/wp-content/uploads/2021/08/7.jpg?ssl=1',
  ]
  const intervalRef = useRef(null)
  const isHoverRef = useRef(false)

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const galleryNext = () => setGalleryIndex((i) => (i + 1) % galleryImages.length)
  const galleryPrev = () => setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)

  useEffect(() => {
    function start() {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isHoverRef.current) next()
      }, 5000)
    }

    start()
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      clearInterval(intervalRef.current)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="landing" id="top">
      <header className="site-header">
        <div className="container header-inner">
            <div className="places-logo-group">
            <img src={slrcLogo} alt="San Luis Río Colorado" className="brand-logo slrc-logo" />
            <img src={logotipo} alt="Logotipo de la empresa" className="brand-logo company-logo" />
          </div>
          <nav className="nav">
            <a href="#discover">Descubre San Luis</a>
            <a href="#gallery">Galería</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container-hero wide-hero">
          <div className="carousel"
            onMouseEnter={() => { isHoverRef.current = true }}
            onMouseLeave={() => { isHoverRef.current = false }}
          >
            <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((src, i) => (
                <div
                  key={i}
                  className={`slide`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>

            <div className="carousel-indicators" aria-hidden>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-content reveal">
            <h1 className="hero-title">Descubre los lugares más hermosos</h1>
            <p className="hero-sub">Te llevamos a rincones inolvidables para vivir experiencias únicas en San Luis Río Colorado.</p>
            <div className="hero-ctas">
              <a className="btn primary" href="#book">Reserva ahora</a>
            </div>
          </div>

          <div className="hero-arrows" aria-hidden>
            <button className="arrow left" onClick={prev} aria-label="Anterior">‹</button>
            <button className="arrow right" onClick={next} aria-label="Siguiente">›</button>
          </div>
        </section>

        {/* Breadcrumbs en la Landing */}
        <Breadcrumbs />

        {/* Sección Descubrir centrada */}
        <div className="section-header" style={{ textAlign: 'center', margin: '40px 0 20px', display: 'block' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111', margin: '0 0 10px', letterSpacing: '-0.02em' }}>Descubrir</h2>
          <p style={{ color: '#5f6b75', fontSize: '1.1rem', margin: '0 0 10px', fontWeight: '500' }}>Conoce lo mejor de San Luis Río Colorado</p>
          <p className="section-copy" style={{ maxWidth: '640px', margin: '0 auto', color: '#5f6b75' }}>
            Tres experiencias locales que te ayudan a planear tu viaje: actividades, gastronomía y alojamiento.
          </p>
        </div>

        <section id="discover" className="features container">
          <article className="reveal">
            <div className="feature-image">
              <img src={activityImage} alt="Lugares para visitar" />
            </div>
            <h3>Lugares para visitar</h3>
            <p>Paseos por el río, pesca y eventos culturales durante todo el año.</p>
            <div className="feature-actions">
              <a className="btn" href="#/inicio/descubrir/places">Ver lugares</a>
            </div>
          </article>
          <article className="reveal">
            <div className="feature-image">
              <img src={foodImage} alt="Gastronomía local" />
            </div>
            <h3>Gastronomía</h3>
            <p>Sabores locales y restaurantes familiares con tradición.</p>
            <div className="feature-actions">
              <a className="btn" href="#/inicio/descubrir/gastronomy">Ver gastronomía</a>
            </div>
          </article>
          <article className="reveal">
            <div className="feature-image">
              <img src={lodgingImage} alt="Alojamiento confortable" />
            </div>
            <h3>Alojamiento</h3>
            <p>Opciones para todos los presupuestos: boutique, hoteles y camping.</p>
            <div className="feature-actions">
              <a className="btn" href="#/inicio/descubrir/lodging">Ver hospedaje</a>
            </div>
          </article>
        </section>

        {/* Sección Galería centrada */}
        <section id="gallery" className="gallery container">
          <div className="gallery-header" style={{ display: 'block', textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111', margin: '0', letterSpacing: '-0.02em' }}>Galería</h2>
          </div>

          <div className="gallery-carousel reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
            <div className="gallery-slides" style={{ transform: `translateX(-${galleryIndex * 100}%)`, display: 'flex', transition: 'transform 500ms ease' }}>
              {galleryImages.map((src, i) => (
                <div key={i} className="gallery-slide" style={{ minWidth: '100%', boxSizing: 'border-box' }}>
                  <img src={src} alt={`Escena local ${i + 1}`} style={{ width: '100%', display: 'block', objectFit: 'cover', minHeight: '380px' }} />
                </div>
              ))}
            </div>

            <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', pointerEvents: 'none', zIndex: 10 }}>
              <button 
                onClick={galleryPrev} 
                aria-label="Anterior" 
                style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', width: '44px', height: '44px', borderRadius: '999px', fontSize: '24px', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'background 220ms' }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.65)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.45)'}
              >
                ‹
              </button>
              <button 
                onClick={galleryNext} 
                aria-label="Siguiente" 
                style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.45)', color: '#fff', border: 'none', width: '44px', height: '44px', borderRadius: '999px', fontSize: '24px', cursor: 'pointer', display: 'grid', placeItems: 'center', transition: 'background 220ms' }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.65)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.45)'}
              >
                ›
              </button>
            </div>
          </div>

          <div className="gallery-indicators" aria-hidden>
            {galleryImages.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === galleryIndex ? 'active' : ''}`}
                onClick={() => setGalleryIndex(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Sección Contacto con el título unificado e igualado en jerarquía */}
        <section id="contact" className="contact container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111', margin: '0 0 16px', letterSpacing: '-0.02em' }}>Contacto</h2>
          <p style={{ color: '#5f6b75', maxWidth: '650px', margin: '0 auto 24px', lineHeight: '1.75' }}>
            ¿Listo para planear tu viaje? Escríbenos y te ayudamos a organizarlo.
          </p>
          <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
            <input aria-label="Nombre" placeholder="Nombre" />
            <input aria-label="Correo" placeholder="Correo" />
            <textarea aria-label="Mensaje" placeholder="Mensaje"></textarea>
            <button className="btn" type="submit" style={{ justifySelf: 'center' }}>Enviar</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Turismo San Luis Río Colorado</p>
        </div>
      </footer>
    </div>
  )
}