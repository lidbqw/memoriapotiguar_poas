from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select

from app.api.users import get_current_admin_user
from app.database.session import get_session
from app.models.user import Administrador, Categoria, Gastronomia, Historia, User
from app.schemas.user import CategoriaCreate, CategoriaRead, GastronomiaCreate, GastronomiaRead, HistoriaCreate, HistoriaRead

router = APIRouter(prefix="/admin", tags=["admin"])


@router.post("/categorias", response_model=CategoriaRead, status_code=status.HTTP_201_CREATED)
def create_categoria(
    categoria: CategoriaCreate,
    current_user: User = Depends(get_current_admin_user),
    session: Session = Depends(get_session),
):
    categoria_existente = session.exec(select(Categoria).where(Categoria.slug == categoria.slug)).first()
    if categoria_existente:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Categoria já existe")

    admin = session.exec(select(Administrador).where(Administrador.usuario_id == current_user.id)).first()
    nova_categoria = Categoria(
        nome=categoria.nome,
        slug=categoria.slug,
        descricao=categoria.descricao,
        administrador_id=admin.id if admin else None,
    )
    session.add(nova_categoria)
    session.commit()
    session.refresh(nova_categoria)
    return nova_categoria


@router.post("/historias", response_model=HistoriaRead, status_code=status.HTTP_201_CREATED)
def create_historia(
    historia: HistoriaCreate,
    current_user: User = Depends(get_current_admin_user),
    session: Session = Depends(get_session),
):
    admin = session.exec(select(Administrador).where(Administrador.usuario_id == current_user.id)).first()
    nova_historia = Historia(
        titulo=historia.titulo,
        resumo=historia.resumo,
        conteudo=historia.conteudo,
        imagem=historia.imagem,
        categoria_id=historia.categoria_id,
        usuario_id=current_user.id,
        administrador_id=admin.id if admin else None,
    )
    session.add(nova_historia)
    session.commit()
    session.refresh(nova_historia)
    return nova_historia


@router.post("/gastronomias", response_model=GastronomiaRead, status_code=status.HTTP_201_CREATED)
def create_gastronomia(
    gastronomia: GastronomiaCreate,
    current_user: User = Depends(get_current_admin_user),
    session: Session = Depends(get_session),
):
    admin = session.exec(select(Administrador).where(Administrador.usuario_id == current_user.id)).first()
    nova_gastronomia = Gastronomia(
        titulo=gastronomia.titulo,
        resumo=gastronomia.resumo,
        conteudo=gastronomia.conteudo,
        imagem=gastronomia.imagem,
        categoria_id=gastronomia.categoria_id,
        usuario_id=current_user.id,
        administrador_id=admin.id if admin else None,
    )
    session.add(nova_gastronomia)
    session.commit()
    session.refresh(nova_gastronomia)
    return nova_gastronomia


@router.get("/me")
def admin_me(current_user: User = Depends(get_current_admin_user)):
    return {"id": current_user.id, "nome": current_user.nome, "email": current_user.email, "is_admin": current_user.is_admin}
