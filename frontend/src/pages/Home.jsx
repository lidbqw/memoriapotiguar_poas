import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import CategoryCard from '@/components/CategoryCard'
import { imageUrl } from '@/services/api'

const slides = [
  { src: imageUrl('barra.jpg'), alt: 'Velha Barra de Santana' },
  { src: imageUrl('Gastrobar.jpg'), alt: 'Gastronomia potiguar' },
  { src: imageUrl('historia.jpg'), alt: 'História potiguar' },
]

export default function Home() {
  return <>
    <Header />
    <main className="page home-page">
      <HeroCarousel slides={slides} title="Descubra o RN" subtitle="Explore histórias, cultura e lugares incríveis do Rio Grande do Norte." />

      <section className="category-section">
        <CategoryCard
          image={imageUrl('historia.jpg')}
          title="Histórico"
          text="Viaje no tempo conhecendo os monumentos, os marcos da colonização, as memórias esquecidas e o passado que desenhou as linhas e a identidade do povo potiguar através dos séculos."
          to="/historico"
        />
        <CategoryCard
          image={imageUrl('cutural1.png')}
          title="Cultural"
          text="Mergulhe nas manifestações artísticas, no artesanato, no folclore e nas expressões únicas que dão vida e movimento à nossa terra."
          reverse
          to="/historico"
        />
        <CategoryCard
          image={imageUrl('gastronomico1.png')}
          title="Gastronômico"
          text="Saboreie a legítima culinária sertaneja e litorânea: temperos fortes, ingredientes nativos e histórias de herança em uma verdadeira viagem de sabores."
          to="/gastronomico"
        />
      </section>

      <HeroCarousel
        className="secondary-hero"
        slides={[
          { src: imageUrl('museu_caicó.jpg'), alt: 'Museu de Caicó' },
          { src: imageUrl('Igreja_Matriz_de_Nossa_Senhora_dos-Remédios.jpg'), alt: 'Igreja Matriz' },
          { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', alt: 'Paisagem' },
        ]}
        title="Registros Potiguares"
        subtitle="Paisagens e memórias capturadas pelo tempo."
      />

      <section className="tribute-section">
        <span className="tribute-tag">Homenagem Especial</span>
        <h2>Velha Barra de Santana</h2>
        <h3>A Cidade Submersa pelas Águas</h3>
        <p>Um capítulo de profunda nostalgia e história no coração do Seridó. A Velha Barra de Santana hoje descansa sob as águas, mas sua memória permanece viva na mente de seu povo.</p>
        <Link className="tribute-btn" to="/historico">Conhecer essa história →</Link>
      </section>
    </main>
    <Footer />
  </>
}
