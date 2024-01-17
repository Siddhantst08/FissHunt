from django.db import models

#Register the models here
class User(models.Model):
    name = models.CharField(max_length = 50)
    age = models.models.CharField(max_length=50)
    username = models.CharField(max_length= 50)
    password = models.CharField(max_length=50)