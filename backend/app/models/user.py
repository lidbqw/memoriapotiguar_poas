from datetime import datetime
from typing import List, Optional
from sqlmodel import Field, Relationship, SQLModel


class User(SQLModel, table=True):
    __tablename__ = "usuarios"

    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str = Field(index=True, max_length=255)
    email: str = Field(index=True, sa_column_kwargs={"unique": True}, max_length=255)
    senha_hash: str
    is_admin: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    administrador: Optional["Administrador"] = Relationship(back_populates="usuario")
    historias: List["Historia"] = Relationship(back_populates="usuario")
    gastronomias: List["Gastronomia"] = Relationship(back_populates="usuario")


class Administrador(SQLModel, table=True):
    __tablename__ = "administradores"

    id: Optional[int] = Field(default=None, primary_key=True)
    usuario_id: int = Field(foreign_key="usuarios.id", unique=True, index=True)
    cargo: str = Field(default="administrador", max_length=100)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    usuario: Optional[User] = Relationship(back_populates="administrador")
    categorias: List["Categoria"] = Relationship(back_populates="administrador")
    historias: List["Historia"] = Relationship(back_populates="administrador")
    gastronomias: List["Gastronomia"] = Relationship(back_populates="administrador")


class Categoria(SQLModel, table=True):
    __tablename__ = "categorias"

    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str = Field(index=True, max_length=150)
    slug: str = Field(index=True, unique=True, max_length=150)
    descricao: Optional[str] = Field(default=None)
    administrador_id: Optional[int] = Field(default=None, foreign_key="administradores.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)

    administrador: Optional[Administrador] = Relationship(back_populates="categorias")
    historias: List["Historia"] = Relationship(back_populates="categoria")
    gastronomias: List["Gastronomia"] = Relationship(back_populates="categoria")


class Historia(SQLModel, table=True):
    __tablename__ = "historias"

    id: Optional[int] = Field(default=None, primary_key=True)
    titulo: str = Field(index=True, max_length=255)
    resumo: Optional[str] = Field(default=None)
    conteudo: str
    imagem: Optional[str] = Field(default=None, max_length=500)
    categoria_id: Optional[int] = Field(default=None, foreign_key="categorias.id")
    usuario_id: Optional[int] = Field(default=None, foreign_key="usuarios.id")
    administrador_id: Optional[int] = Field(default=None, foreign_key="administradores.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    categoria: Optional[Categoria] = Relationship(back_populates="historias")
    usuario: Optional[User] = Relationship(back_populates="historias")
    administrador: Optional[Administrador] = Relationship(back_populates="historias")


class Gastronomia(SQLModel, table=True):
    __tablename__ = "gastronomias"

    id: Optional[int] = Field(default=None, primary_key=True)
    titulo: str = Field(index=True, max_length=255)
    resumo: Optional[str] = Field(default=None)
    conteudo: str
    imagem: Optional[str] = Field(default=None, max_length=500)
    categoria_id: Optional[int] = Field(default=None, foreign_key="categorias.id")
    usuario_id: Optional[int] = Field(default=None, foreign_key="usuarios.id")
    administrador_id: Optional[int] = Field(default=None, foreign_key="administradores.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    categoria: Optional[Categoria] = Relationship(back_populates="gastronomias")
    usuario: Optional[User] = Relationship(back_populates="gastronomias")
    administrador: Optional[Administrador] = Relationship(back_populates="gastronomias")
