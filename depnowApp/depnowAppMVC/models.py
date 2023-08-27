from django.db import models
from django.contrib.auth.models import User #authentication system



class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=128)  # Hashed password
    settings = models.JSONField(default=dict)  # Store user settings as JSON data
    # Other fields as needed
     #established a relationship between user and and model using a foreign key, 
    #such that the user's topics would be deleted if the user was deleted

user1 = User(id=1, username='JerryTaylor13', email='JerryTaylor13@gmail.com', password='f49fidaf#')
user1.save()

class Subject(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    #owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

class UserSubject(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    primary_key = models.ForeignKey(User, related_name='user_subjects', on_delete=models.CASCADE)
    # Other fields as needed

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

class Task(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    deadline = models.DateTimeField(null=True, blank=True)
    focus_hours = models.FloatField(default=0.0)
    completion_status = models.BooleanField(default=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,default=1)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

class FocusSession(models.Model):
    id = models.AutoField(primary_key=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

class Tally(models.Model):
    id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    hours_count = models.FloatField(default=0.0)  # Number of hours in this tally
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, default=1)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

class Badge(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    threshold_hours = models.FloatField(default=0.0)  # Minimum hours required to earn this badge
    image_url = models.URLField()
    # Other fields as needed

class Streak(models.Model):
    id = models.AutoField(primary_key=True)
    start_date = models.DateField()
    end_date = models.DateField()
    focus_hours_per_day = models.FloatField(default=0.0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

class Reflection(models.Model):
    id = models.AutoField(primary_key=True)
    entry_date = models.DateField()  # Date of the reflection entry
    productivity_rating = models.IntegerField()  # Rating for the user's productivity
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Other fields as needed

