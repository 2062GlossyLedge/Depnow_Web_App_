from django.contrib import admin
from .models import (
    dnUser,
    Subject,
    UserSubject,
    Project,
    Task,
    FocusSession,
    Tally,
    Badge,
    Streak,
    Reflection,
    ProjectChatHistory,
)

# Register your models here.
admin.site.register(dnUser)
admin.site.register(Subject)
admin.site.register(UserSubject)
admin.site.register(Project)
admin.site.register(Task)
admin.site.register(FocusSession)
admin.site.register(Tally)
admin.site.register(Badge)
admin.site.register(Streak)
admin.site.register(Reflection)
admin.site.register(ProjectChatHistory)
