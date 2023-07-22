from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'base.html')

def profile(request):
    return render(request, 'profile.html')

def data_insights(request):
    return render(request, 'data_insights.html')

def tracker(request):
    return render(request, 'tracker.html')

def todo_list(request):
    return render(request, 'todo_list.html')