import { Link, useParams } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { gastronomia, historia } from '@/data/content'

export default function ContentDetail({ type }) {
  const { slug } = useParams()
  const isGastronomia = type === 'gastronomia'
  const item = (isGastronomia ? gastronomia : historia).find((entry) => entry.slug === slug)
  const backPath = isGastronomia ? '/gastronomico' : '/historico'
  const category = isGastronomia ? 'Gastronomia Potiguar' : 'Histórias do RN'

  return <>
    <Header />
    <main className="page content-detail-page">
      {item ? <article className="content-detail">
        <img className="content-detail-image" src={item.image} alt={item.title} />
        <div className="content-detail-body">
          <Link className="content-detail-back" to={backPath}>← Voltar para {category}</Link>
          <p className="content-detail-category">{category}</p>
          <h1>{item.title}</h1>
          <p className="content-detail-text">{item.text}</p>
        </div>
      </article> : <section className="content-detail-missing">
        <h1>Conteúdo não encontrado</h1>
        <Link className="primary-btn" to={backPath}>Voltar para {category}</Link>
      </section>}
    </main>
    <Footer />
  </>
}