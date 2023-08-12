from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'base.html')

def slideshow(request):
    return render(request, 'slideshow.html')

def profile(request):
    return render(request, 'profile.html')

def data_insights(request):
    return render(request, 'data_insights.html')

def tracker(request):
    return render(request, 'tracker.html')

def todo_list(request):
    return render(request, 'todo_list.html')

def tracker(request):
    options = range(10, 61, 5)
    return render(request, 'tracker.html', {'options': options})

def submit_selection(request):
    if request.method == 'POST':
        selected_time = request.POST.get('selected_time')
        # Handle the selected_time as needed
    return render(request, 'tracker.html')

def stopwatch(request):
    return render(request, 'stopwatch.html')

def countdown_timer(request):
    options = range(10, 61, 5)
    return render(request, 'countdown_timer.html', {'options': options})

def manual_tracker(request):
    return render(request, 'manual_tracker.html')

def projects_and_tasks(request):
    return render(request, 'projects_and_tasks.html')