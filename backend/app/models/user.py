from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str = Field(max_length=255)
    email: str = Field(index=True, sa_column_kwargs={"unique": True}, max_length=255)
    senha_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
