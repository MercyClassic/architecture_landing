from sqladmin import ModelView

from models.example import Example, ExamplePhoto


class ExampleAdmin(ModelView, model=Example):
    column_list = [Example.id, Example.description]


class ExamplePhotoAdmin(ModelView, model=ExamplePhoto):
    column_list = [ExamplePhoto.id, ExamplePhoto.path]
