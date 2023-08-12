from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=80)
    age = models.IntegerField()

# class Tutorial(models.Model):
#     title = models.CharField(max_length=100)
#     image = models.ImageField(upload_to='images/')