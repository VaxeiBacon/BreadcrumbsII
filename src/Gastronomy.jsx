import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import logotipo from './assets/logotipoempresa.png'
import slrcLogo from './assets/SLRCLogo.webp'
import bohemio from './assets/bohemiorestaurante.jpg'

const restaurants = [
  {
    title: 'El parianchi',
    subtitle: 'Sabores tradicionales en un ambiente auténtico y cálido.',
    image: 'https://bnamx.org.mx/wp-content/uploads/2024/06/XVIII-276-0-600x263.jpg',
  },
  {
    title: 'La pérgola',
    subtitle: 'Cocina local con una atmósfera elegante y llena de detalles.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/86/35/8a/la-pergola.jpg?w=900&h=-1&s=1',
  },
  {
    title: 'El herradero',
    subtitle: 'Una experiencia de sabor con recetas regionales y ambiente de tradición.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHg3ftQpowJMVQbOOfXCVr-yTGhi0Vvqob-Mja2gs6CGNot28Jvlxdpw_gbJSiZEX8l_7WQh1Q7_-OX2vAobpsQqc_WGXpy41PaAvD5EbZ_Eu1kNFq93RTN5C_JqJ6tNRy_e-8iDA=s680-w680-h510',
  },
  {
    title: 'Bohemio',
    subtitle: 'Restaurante local con ambiente contemporáneo y platos cuidadosamente preparados.',
    image: bohemio,
  },
  {
    title: 'Pez gallo',
    subtitle: 'Frescura marina y propuestas creativas para los amantes del mar.',
    image: 'https://scontent.fyum1-1.fna.fbcdn.net/v/t39.30808-6/514412867_1304332291633062_4004519239245730213_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gNREJlwznNcQ7kNvwGYOnBb&_nc_oc=AdpC_XwiQjz3OP9CfTUQxsAMOBDLvmsC63t4tdM1lNDJMZEMEd3tas-SjhT_ggPXWHY&_nc_zt=23&_nc_ht=scontent.fyum1-1.fna&_nc_gid=YqfTW6djV2qwPtQkY7-TGQ&_nc_ss=7a289&oh=00_Af72eQhH-7m0lkM7MBtLbZhHdFYBr4SJLcJbxlDMMQLYwg&oe=6A1B1DC0',
  },
  {
    title: 'Padre santo',
    subtitle: 'Un destino gastronómico vibrante con platillos que celebran la tradición.',
    image: 'https://scontent.fyum1-1.fna.fbcdn.net/v/t51.82787-15/701623776_17892898752467087_2600921215586200368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m4vVN2zFRCUQ7kNvwGjN6cu&_nc_oc=AdoEi7w1n6-E3YBKyT2cy3xi6Zxnxg9-TrlRWxYa_4VrwuZxdEf52ZML-8no1zZYm_w&_nc_zt=23&_nc_ht=scontent.fyum1-1.fna&_nc_gid=rw59J_Z3OiH90S-wnvSNtw&_nc_ss=7a289&oh=00_Af57sMr99_J91qTjx2AvQOaqUCpWmu6lZp1bdzfCyvbR9g&oe=6A1B0E82',
  },
]

export default function Gastronomy() {
  return (
    <div className="places-page" id="top">
      <header className="places-header">
        <div className="places-header-inner">
          <div className="places-logo-group">
            <a href="#/inicio/descubrir" className="logo-link">
              <img src={slrcLogo} alt="San Luis Río Colorado" className="brand-logo slrc-logo" />
            </a>
            <img src={logotipo} alt="Logotipo de la empresa" className="brand-logo company-logo" />
          </div>
          <nav className="places-nav">
            <a href="#/inicio/descubrir">Inicio</a>
            <a href="#/inicio/descubrir/places">Lugares</a>
            <a href="#/inicio/descubrir/lodging">Hospedaje</a>
          </nav>
        </div>
      </header>

      <section className="places-hero" style={{ backgroundImage: `url(https://vagabundeando.mx/public//img/site/articles/Parianchi%20desde%20la%20cocina1701743302.webp)` }}>
        <div className="places-hero-overlay" />
        <div className="places-hero-copy">
          <span className="eyebrow">Gastronomía</span>
          <h1>Sabores que cuentan historias</h1>
          <p>Descubre los restaurantes y espacios culinarios que brindan sabor y tradición a San Luis Río Colorado.</p>
        </div>
      </section>

      {/* Insertado exactamente debajo del Hero */}
      <Breadcrumbs />

      <main className="places-main container" id="gastronomia">
        <div className="places-grid">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.title}
              className="place-card"
              style={{ backgroundImage: `url(${restaurant.image})` }}
            >
              <div className="place-card-overlay" />
              <div className="place-card-content">
                <h3>{restaurant.title}</h3>
                <p>{restaurant.subtitle}</p>
                <a className="btn place-cta" href="#contact">Más detalles</a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}