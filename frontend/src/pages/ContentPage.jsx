import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContentGrid from '@/components/ContentGrid'
import { imageUrl } from '@/services/api'
import { gastronomia, historia } from '@/data/content'

export default function ContentPage({ type }) {
  const isGastronomia = type === 'gastronomia'
  const items = isGastronomia ? gastronomia : historia
  const title = isGastronomia ? 'Gastronomia Potiguar' : 'Histórias do RN'
  const subtitle = isGastronomia ? 'Sabores que também contam histórias.' : 'Lugares, pessoas e memórias que ajudam a contar o Rio Grande do Norte.'
  const banner = imageUrl(isGastronomia ? 'gastronomico1.png' : 'historia.jpg')

  return <>
    <Header />
    <main className="page content-page">
      <div className="content-banner">
        <img src={banner} alt="" />
        <div><h1>{title}</h1><p>{subtitle}</p></div>
      </div>
      <section className="content-container">
        <ContentGrid items={items} />
      </section>
    </main>
    <Footer />
  </>
}
