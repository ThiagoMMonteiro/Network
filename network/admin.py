from django.contrib import admin
from .models import User, Post


class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email")


class PostAdmin(admin.ModelAdmin):
    list_display = ("user", "content", "post_date")


admin.site.register(User, UserAdmin)
admin.site.register(Post, PostAdmin)
