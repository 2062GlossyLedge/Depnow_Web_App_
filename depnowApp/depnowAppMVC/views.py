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

def slideshow_view(request):
    # Replace this with your actual slide data
    slides = [
        {
            'logo': 'depnowAppMVC/images/MAC_carina_Nebula.jpg',
        'row1': {'image': 'depnowAppMVC/images/GitHub-logo.jpg', 'text': 'Row 1 Text'},
        'row2': {'image': 'depnowAppMVC/images/GitHub-logo.jpg', 'text': 'Row 2 Text'},
        'row3': {'image': 'depnowAppMVC/images/GitHub-logo.jpg', 'text': 'Row 3 Text'},
        },
        # Add more slide data here
    ]
    print("View is executed.")
    return render(request, 'slideshow.html', {'slides': slides})