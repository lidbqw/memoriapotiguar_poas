import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAuth } from '@/context/AuthContext'

export default function Profile() {
  const { user } = useAuth()
  return <>
    <Header />
    <main className="page profile-page">
      <section className="profile-card">
        <span className="profile-kicker">Minha conta</span>
        <h1>{user?.nome}</h1>
        <div className="profile-row"><strong>ID</strong><span>{user?.id ?? '—'}</span></div>
        <div className="profile-row"><strong>Email</strong><span>{user?.email}</span></div>
        <div className="profile-row"><strong>Criado em</strong><span>{user?.created_at ? new Date(user.created_at).toLocaleDateString('pt-BR') : '—'}</span></div>
      </section>
    </main>
    <Footer />
  </>
}
