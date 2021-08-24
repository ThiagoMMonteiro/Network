from django.contrib.auth.models import AbstractUser
from django.db import models
import django.utils.timezone


class User(AbstractUser):
    pass


class Post(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="owner_posts")
    content = models.TextField(blank=True)
    post_date = models.DateTimeField(default=django.utils.timezone.now, verbose_name='post date')

    def __str__(self):
        return f"{self.owner}: {self.content} Date: {self.post_date}"