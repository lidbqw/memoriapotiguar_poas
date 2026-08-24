import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')
    if (form.password !== form.confirm) {
      setError('As senhas não coincidem.')
      return
    }
    setLoading(true)
    try {
      await register({ nome: form.name, email: form.email, senha: form.password })
      setSuccess('Conta criada com sucesso! Redirecionando para o login...')
      setTimeout(() => navigate('/login'), 900)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return <main className="auth-page">
    <section className="auth-card">
      <Link className="auth-brand" to="/">Memória Potiguar</Link>
      <h1>Criar Conta</h1>
      <p className="auth-subtitle">Faça seu cadastro para participar da plataforma.</p>
      {error && <div className="error-box">{error}</div>}
      {success && <div className="success-box">{success}</div>}
      <form onSubmit={handleSubmit}>
        <label>Nome<input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" required /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" required /></label>
        <label>Senha<input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Crie uma senha" required /></label>
        <label>Confirmar senha<input type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} placeholder="Repita a senha" required /></label>
        <button className="primary-btn full" disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</button>
      </form>
      <p className="auth-link">Já tem conta? <Link to="/login">Entrar</Link></p>
    </section>
  </main>
}
