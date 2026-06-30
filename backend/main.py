from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import Response, FileResponse

from app.config import settings
from app.database.session import create_db_and_tables
from app.api.auth import router as auth_router
from app.api.users import router as users_router

BASE_DIR = Path(__file__).resolve().parent.parent
IMG_DIR = BASE_DIR / "img"
FRONTEND_BUILD_DIR = BASE_DIR / "frontend" / "build"
FRONTEND_PAGES_DIR = BASE_DIR / "frontend"

app = FastAPI(
    title=settings.app_name,
    debug=settings.debug,
)

# Add CORS middleware first
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if settings.debug else [settings.frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/img", StaticFiles(directory=IMG_DIR), name="img")

# Include API routers under the API prefix
app.include_router(auth_router, prefix=settings.api_prefix)
app.include_router(users_router, prefix=settings.api_prefix)


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


@app.get("/cadastro")
def cadastro_page():
    return FileResponse(FRONTEND_PAGES_DIR / "cadastro.html")


@app.get("/gastronomico")
def gastronomico_page():
    return FileResponse(FRONTEND_PAGES_DIR / "gastronomico.html")


@app.get("/historico")
def historico_page():
    return FileResponse(FRONTEND_PAGES_DIR / "historico.html")


@app.get("/index")
def index_page():
    return FileResponse(FRONTEND_PAGES_DIR / "index.html")


@app.get("/login")
def login_page():
    return FileResponse(FRONTEND_PAGES_DIR / "login.html")

# Serve frontend build (single-page app) if present. API routes take precedence.
if FRONTEND_BUILD_DIR.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_BUILD_DIR), html=True), name="frontend")
else:
    # fallback root endpoint when no build is present
    @app.get("/")
    def root():
        return {"message": settings.app_name, "status": "ok"}

