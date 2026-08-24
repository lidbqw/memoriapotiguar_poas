import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="site-header">
      <Link className="logo" to="/">Memória Potiguar</Link>
      <nav className="main-nav" aria-label="Navegação principal">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/historico">Histórico</NavLink>
        <NavLink to="/gastronomico">Gastronômico</NavLink>
        {isAuthenticated && <span className="welcome">Olá, {user?.nome?.split(' ')[0]}</span>}
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>Sair</button>
        ) : (
          <Link className="logout-btn" to="/login">Entrar</Link>
        )}
      </nav>
    </header>
  )
}
