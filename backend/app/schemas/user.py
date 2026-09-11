from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    nome: str
    email: EmailStr
    senha: str


class UserRead(BaseModel):
    id: Optional[int] = None
    nome: str
    email: EmailStr
    is_admin: bool = False
    created_at: datetime

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenPayload(BaseModel):
    sub: Optional[str] = None


class CategoriaCreate(BaseModel):
    nome: str
    slug: str
    descricao: Optional[str] = None


class CategoriaRead(CategoriaCreate):
    id: Optional[int] = None
    administrador_id: Optional[int] = None
    created_at: datetime

    class Config:
        from_attributes = True


class ConteudoBase(BaseModel):
    titulo: str
    resumo: Optional[str] = None
    conteudo: str
    imagem: Optional[str] = None
    categoria_id: Optional[int] = None


class HistoriaCreate(ConteudoBase):
    pass


class HistoriaRead(HistoriaCreate):
    id: Optional[int] = None
    usuario_id: Optional[int] = None
    administrador_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class GastronomiaCreate(ConteudoBase):
    pass


class GastronomiaRead(GastronomiaCreate):
    id: Optional[int] = None
    usuario_id: Optional[int] = None
    administrador_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
