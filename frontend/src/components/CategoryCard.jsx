import { Link } from 'react-router-dom'

export default function CategoryCard({ image, title, text, reverse = false, to }) {
  return (
    <article className={`category-card ${reverse ? 'reverse' : ''}`}>
      <div className="category-image"><img src={image} alt={title} /></div>
      <div className="category-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="primary-btn" to={to}>Ver mais</Link>
      </div>
    </article>
  )
}
