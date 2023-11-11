from django.contrib import admin
from .models import User, Subject, UserSubject, Project, Task, FocusSession, Tally, Badge, Streak, Reflection

# Register your models here.
admin.site.register(User)
admin.site.register(Subject)
admin.site.register(UserSubject)
admin.site.register(Project)
admin.site.register(Task)
admin.site.register(FocusSession)
admin.site.register(Tally)
admin.site.register(Badge)
admin.site.register(Streak)
admin.site.register(Reflection)