from sqlmodel import Session, select
from app.models.user import Administrador, User
from app.schemas.user import UserCreate
from app.utils.security import get_password_hash, verify_password


def get_user_by_email(session: Session, email: str) -> User | None:
    return session.exec(select(User).where(User.email == email)).first()


def create_user(session: Session, user_create: UserCreate) -> User:
    user = User(
        nome=user_create.nome,
        email=user_create.email,
        senha_hash=get_password_hash(user_create.senha),
        is_admin=False,
    )
    session.add(user)
    session.commit()
    session.refresh(user)
    return user


def create_admin_record(session: Session, user_id: int, cargo: str = "administrador") -> Administrador:
    admin = Administrador(usuario_id=user_id, cargo=cargo)
    session.add(admin)
    session.commit()
    session.refresh(admin)
    return admin


def authenticate_user(session: Session, email: str, senha: str) -> User | None:
    user = get_user_by_email(session, email)
    if not user:
        return None
    if not verify_password(senha, user.senha_hash):
        return None
    return user
