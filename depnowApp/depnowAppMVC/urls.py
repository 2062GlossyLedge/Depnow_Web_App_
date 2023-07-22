from . import views
from django.urls import path

urlpatterns = [
path('', views.base, name='base'),
    path('profile/', views.profile, name='profile'),
    path('data_insights/', views.data_insights, name='data_insights'),
    path('tracker/', views.tracker, name='tracker'),
    path('todo_list/', views.todo_list, name='todo_list'),
]