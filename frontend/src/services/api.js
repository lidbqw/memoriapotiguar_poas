const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

async function request(path, options) {
  try {
    return await parseResponse(await fetch(`${API_URL}${path}`, options))
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Não foi possível conectar à API. Verifique se o backend está em execução.')
    }
    throw error
  }
}

async function parseResponse(response) {
  const text = await response.text()
  let data = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = text
  }

  if (!response.ok) {
    const message = data?.detail || data?.message || 'Não foi possível concluir a solicitação.'
    throw new Error(message)
  }
  return data
}

export async function registerUser(payload) {
  return request('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

export async function loginUser(email, password) {
  const body = new URLSearchParams()
  body.set('username', email)
  body.set('password', password)

  return request('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
}

export async function getCurrentUser(token) {
  return request('/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export function imageUrl(name) {
  return `${API_URL}/img/${encodeURIComponent(name)}`
}
