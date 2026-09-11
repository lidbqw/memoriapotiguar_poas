from app.models.user import User, Administrador, Categoria, Historia, Gastronomia


def test_model_entities_exist():
    assert User.__tablename__ == "usuarios"
    assert Administrador.__tablename__ == "administradores"
    assert Categoria.__tablename__ == "categorias"
    assert Historia.__tablename__ == "historias"
    assert Gastronomia.__tablename__ == "gastronomias"
