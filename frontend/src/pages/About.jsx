import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return <>
    <Header />
    <main className="page about-page">
      <section className="about-banner">
        <h1>Sobre a Memória Potiguar</h1>
      </section>
      <section className="about-content">
        <h2>Histórias que aproximam</h2>
        <p>Memória Potiguar é um projeto dedicado a valorizar lugares, histórias e tradições do Rio Grande do Norte, com atenção especial às memórias do Seridó e do interior do estado.</p>
        <p>Aqui, o patrimônio histórico encontra a cultura e a gastronomia local. Cada conteúdo é um convite para conhecer melhor a região e reconhecer as lembranças e os saberes que fazem parte da identidade potiguar.</p>
        <ul className="about-focus">
          <li>História, patrimônio e memória das comunidades</li>
          <li>Cultura e expressões da identidade potiguar</li>
          <li>Sabores e tradições da gastronomia regional</li>
        </ul>
      </section>
      <section className="creator-section" aria-labelledby="creator-heading">
        <h2 id="creator-heading">Criadores</h2>
        <ul className="creator-grid">
          <li>Lídia Maria de Medeiros Santos</li>
          <li>César da Silva Santos</li>
          <li>Godofredo Dantas de Medeiros Maia</li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
}