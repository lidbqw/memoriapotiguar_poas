# Memória Potiguar — Frontend React

Frontend React + Vite criado a partir da interface HTML/CSS existente no repositório e integrado ao FastAPI.

## Estrutura

- `src/components`: header, footer, carrossel, cards, proteção de rota.
- `src/context`: autenticação e token JWT.
- `src/pages`: início, login, cadastro, histórico, gastronômico e perfil.
- `src/services/api.js`: comunicação com a API FastAPI.
- `src/data/content.js`: conteúdo atual das páginas de História e Gastronomia.

## Instalação

```bash
cd frontend
npm install
```

Crie `.env.local`:

```env
VITE_API_URL=http://127.0.0.1:8000
```

## Desenvolvimento

Inicie o FastAPI e depois:

```bash
npm run dev
```

Abra `http://127.0.0.1:3000`.

## Build para o FastAPI

```bash
npm run build
```

O Vite gera `frontend/build`, que é o diretório procurado pelo `backend/main.py`.

## Observação sobre o main.py

Como o backend atual possui rotas `FileResponse` para `/login`, `/cadastro`, `/index`, `/historico` e `/gastronomico`, recomenda-se substituir essas rotas por um fallback do `frontend/build/index.html` para o React Router funcionar também em produção.
