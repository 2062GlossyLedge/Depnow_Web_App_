from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'base.html')

def profile(request):
    return render(request, 'profile.html')