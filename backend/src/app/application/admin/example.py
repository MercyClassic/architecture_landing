from adapters.database.models.example import Example, ExamplePhoto
from markupsafe import Markup
from sqladmin import ModelView


class PhotoThumbnailMixin:
    def thumbnail(self, *args, **kwargs):
        return Markup('<img app="/%s" width=200px height=200px">' % self.image)

    column_formatters = {
        'image': thumbnail,
    }

    column_formatters_detail = {
        'image': thumbnail,
    }


class ExampleAdmin(PhotoThumbnailMixin, ModelView, model=Example):
    column_list = [Example.id, Example.description, Example.image]


class ExamplePhotoAdmin(PhotoThumbnailMixin, ModelView, model=ExamplePhoto):
    column_list = [ExamplePhoto.id, ExamplePhoto.image]
