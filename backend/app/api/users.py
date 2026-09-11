from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select
from app.database.session import get_session
from app.models.user import Administrador, User
from app.schemas.user import UserRead
from app.utils.security import decode_access_token

router = APIRouter(prefix="/users", tags=["users"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


@router.options("/me")
def users_me_options():
    return {}


def get_current_user(token: str = Depends(oauth2_scheme), session: Session = Depends(get_session)) -> User:
    try:
        payload = decode_access_token(token)
        email = payload.get("sub")
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token inválido", headers={"WWW-Authenticate": "Bearer"})

    user = session.exec(select(User).where(User.email == email)).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Usuário não encontrado", headers={"WWW-Authenticate": "Bearer"})
    return user


def get_current_admin_user(current_user: User = Depends(get_current_user), session: Session = Depends(get_session)) -> User:
    if not current_user.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Acesso restrito para administradores")

    admin_record = session.exec(select(Administrador).where(Administrador.usuario_id == current_user.id)).first()
    if not admin_record:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Usuário não está registrado como administrador")
    return current_user


@router.get("/me", response_model=UserRead)
def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
