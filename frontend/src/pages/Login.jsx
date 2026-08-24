import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form.email, form.password)
      navigate(location.state?.from?.pathname || '/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return <main className="auth-page">
    <section className="auth-card">
      <Link className="auth-brand" to="/">Memória Potiguar</Link>
      <h1>Entrar</h1>
      <p className="auth-subtitle">Acesse sua conta para continuar explorando.</p>
      {error && <div className="error-box">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" required /></label>
        <label>Senha<input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Sua senha" required /></label>
        <button className="primary-btn full" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
      </form>
      <p className="auth-link">Ainda não tem conta? <Link to="/cadastro">Criar conta</Link></p>
    </section>
  </main>
}
