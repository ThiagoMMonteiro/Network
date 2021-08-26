from django.contrib.auth.models import AbstractUser
from django.db import models
import django.utils.timezone


class User(AbstractUser):
    pass


class Post(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=True)
    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}: {self.content} Date: {self.post_date}"

    def serialize(self):
        return {
            "user": self.user.username,
            "id": self.id,
            "content": self.content,
            "post_date": self.post_date.strftime("%b %d %Y, %I:%M %p")
        }
