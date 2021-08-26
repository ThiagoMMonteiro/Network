
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),

    # API Routes
    path("newpost", views.new_post, name="new_post"),
    path("allposts/<str:view>", views.all_posts, name="allposts"),
    path("profile/<str:user>", views.load_profile, name="load_profile"),
]
