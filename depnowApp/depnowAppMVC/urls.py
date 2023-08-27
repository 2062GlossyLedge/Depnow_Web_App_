from . import views
from django.urls import path

urlpatterns = [
    path('', views.base, name='base'),
    path('slideshow/', views.slideshow, name='slideshow'),
    path('profile/', views.profile, name='profile'),
    path('data_insights/', views.data_insights, name='data_insights'),
    path('tracker/', views.tracker, name='tracker'),
    path('todo_list/', views.todo_list, name='todo_list'),
    path('submit_selection/', views.submit_selection, name='submit_selection'),
    path('stopwatch/', views.stopwatch, name='stopwatch'),
    path('manual_tracker/', views.manual_tracker, name='manual_tracker'),
    path('countdown_timer/', views.countdown_timer, name='countdown_timer'),
    path('projects_and_tasks', views.projects_and_tasks, name='projects_and_tasks'),

    # path('user_profile_info/', views.user_profile_info, name='user_profile_info')


]
