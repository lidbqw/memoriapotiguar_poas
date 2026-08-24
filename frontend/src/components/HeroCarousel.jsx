import { useEffect, useState } from 'react'

export default function HeroCarousel({ slides, title, subtitle, className = '' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((current) => (current + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className={`hero-carousel ${className}`} aria-label={title}>
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={index === active ? 'active' : ''}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="hero-dots" aria-label="Selecionar imagem">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            className={index === active ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
