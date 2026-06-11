from fastapi import FastAPI, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI(title="Memória Potiguar")

# Configura o FastAPI para buscar arquivos na pasta frontend
templates = Jinja2Templates(directory="frontend")
app.mount("/static", StaticFiles(directory="frontend"), name="static")

@app.get("/")
@app.get("/login")
def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/login")
def login_submit(email: str = Form(...), senha: str = Form(...)):
    return RedirectResponse(url="/index", status_code=303)

@app.get("/cadastro")
def cadastro_page(request: Request):
    return templates.TemplateResponse("cadastro.html", {"request": request})

@app.post("/cadastro")
def cadastro_submit(nome: str = Form(...), email: str = Form(...), senha: str = Form(...), confirmar: str = Form(...)):
    return RedirectResponse(url="/login", status_code=303)

@app.get("/index")
def index_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)