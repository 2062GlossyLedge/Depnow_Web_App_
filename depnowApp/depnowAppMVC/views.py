from os import environ
from django.shortcuts import render
from django.http import JsonResponse
from .models import User, Subject, UserSubject, Project, Task, FocusSession, Tally, Badge, Streak, Reflection
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests, json, time, random
from django.contrib.auth.decorators import login_required
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from .forms import FocusedTimeStart, FocusedTimeEnd

from openai import OpenAI

# Create your views here.
def base(request):
    return render(request, 'slideshow.html')

def slideshow(request):
    return render(request, 'slideshow.html')


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

@login_required
def stopwatch(request):

    return render(request, 'stopwatch.html')

def countdown_timer(request):
    options = range(10, 61, 5)
    return render(request, 'countdown_timer.html', {'options': options})

def manual_tracker(request):
    #focusSession = get_object_or_404(FocusSession, id=focus_session_id)

    #When submit button for manual tracker is clicked
    if request.method == 'POST':
        form1 = FocusedTimeStart(request.POST)
        form2 = FocusedTimeEnd(request.POST)
        if all([form1.is_valid(), form2.is_valid()]):
            focusSession = form1.save(commit=False)
            focusSession.start_time = form1.cleaned_data['start_time'] #name of form1 field
           # focusSession.save()
            print("form1", form1.cleaned_data)

            focusSessionEnd = form2.save(commit=False)
            focusSessionEnd.end_time = form2.cleaned_data['end_time'] #name of form2 field
            #focusSession.save()
            print("form2", form2.cleaned_data)
            
            #focusSessionEnd.end_time = focusSession
            focusSessionEnd.save()
            #return HttpResponseRedirect(reverse('slideshow'))
    else:
            form1 = FocusedTimeStart()
            form2 = FocusedTimeEnd()
    context = {
    'form1': form1,
    'form2': form2
    #'focusSession': focusSession,
}
    return render(request, 'manual_tracker.html', context)

def projects_and_tasks(request):
    return render(request, 'projects_and_tasks.html')


# @api_view(['GET', 'POST'])
# def user_profile_info(request):

#     #if request.method == 'GET':
#         user = User.objects.filter(id=request.user.id)
#         #user = User.objects.all()
#         serializer = UserSerializer(user, many=True)
#         return JsonResponse({"user": serializer.data}, safe=False)
#     # elif request.method == 'POST':
#     #     serializer = UserSerializer(data=request.data)
#     #     if serializer.is_valid():
#     #         serializer.save()
#     #         return Response(serializer.data, status=status.HTTP_201_CREATED)


#https://simpleisbetterthancomplex.com/tutorial/2018/02/03/how-to-use-restful-apis-with-django.html
@login_required
def profile(request):

    context = {
        'username': request.user.username
    }
    return render(request, 'profile.html', context)
   
client = OpenAI()




def get_completion(prompt): 
    print(prompt) 
    completion = client.chat.completions.create(
  model="gpt-3.5-turbo-1106",
   max_tokens=50,
  temperature=0.2,
  response_format={ "type": "json_object" },
  messages=[
    {"role": "system", "content": "You are a helpful assistant designed to output JSON. Always name the key \"response\" "},
    {"role": "user", "content": prompt}
  ]
)
  
    response = completion.choices[0].message.content
    print(response) 
    return response 
  
  
def query_view(request): 
    if request.method == 'POST': 
        prompt = request.POST.get('prompt') 
        response = get_completion(prompt) 
        return JsonResponse({'response': response}) 
    return render(request, 'projects_and_tasks.html') 