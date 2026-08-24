# Substitua as rotas FileResponse do main.py por este bloco.
# Assim, o React Router cuida de /login, /cadastro, /historico e /gastronomico.

from starlette.responses import FileResponse

# Depois de definir FRONTEND_BUILD_DIR:

@app.get('/{full_path:path}')
def serve_react_app(full_path: str):
    if full_path.startswith('auth/') or full_path.startswith('users/'):
        # As rotas da API devem continuar sendo tratadas pelos routers acima.
        # Este ramo serve apenas como proteção lógica; o FastAPI dá precedência às rotas já registradas.
        pass
    return FileResponse(FRONTEND_BUILD_DIR / 'index.html')
