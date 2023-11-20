from os import environ
from django.shortcuts import redirect, render
from django.http import JsonResponse
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
)
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

from .forms import (
    FocusedTimeStart,
    FocusedTimeEnd,
    ProjectNameForm,
    TaskForm,
    TaskCheckoffForm,
)

from openai import OpenAI


# Create your views here.
def base(request):
    return render(request, "slideshow.html")


def slideshow(request):
    return render(request, "slideshow.html")


def data_insights(request):
    return render(request, "data_insights.html")


def tracker(request):
    return render(request, "tracker.html")


def todo_list(request):
    return render(request, "todo_list.html")


def tracker(request):
    options = range(10, 61, 5)
    return render(request, "tracker.html", {"options": options})


def submit_selection(request):
    if request.method == "POST":
        selected_time = request.POST.get("selected_time")
        # Handle the selected_time as needed
    return render(request, "tracker.html")


@login_required
def stopwatch(request):
    return render(request, "stopwatch.html")


def countdown_timer(request):
    options = range(10, 61, 5)
    return render(request, "countdown_timer.html", {"options": options})


def manual_tracker(request):
    # focusSession = get_object_or_404(FocusSession, id=focus_session_id)

    # When submit button for manual tracker is clicked
    if request.method == "POST":
        form1 = FocusedTimeStart(request.POST)
        form2 = FocusedTimeEnd(request.POST)
        if all([form1.is_valid(), form2.is_valid()]):
            focusSession = form1.save(commit=False)
            focusSession.start_time = form1.cleaned_data[
                "start_time"
            ]  # name of form1 field
            # focusSession.save()
            print("form1", form1.cleaned_data)

            focusSessionEnd = form2.save(commit=False)
            focusSessionEnd.end_time = form2.cleaned_data[
                "end_time"
            ]  # name of form2 field
            # focusSession.save()
            print("form2", form2.cleaned_data)

            # focusSessionEnd.end_time = focusSession
            focusSessionEnd.save()
            # return HttpResponseRedirect(reverse('slideshow'))
    else:
        form1 = FocusedTimeStart()
        form2 = FocusedTimeEnd()
    context = {
        "form1": form1,
        "form2": form2
        #'focusSession': focusSession,
    }
    return render(request, "manual_tracker.html", context)


def projects_and_tasks(request):
    return render(request, "projects_and_tasks.html")


@login_required
def profile(request):
    context = {"username": request.user.username}
    return render(request, "profile.html", context)


client = OpenAI()


def get_completion(prompt):
    print(prompt)
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo-1106",
        max_tokens=50,
        temperature=0.2,
        response_format={"type": "json_object"},
        messages=[
            {
                "role": "system",
                "content": 'You are a helpful assistant designed to output JSON. Always name the key "response" ',
            },
            {"role": "user", "content": prompt},
        ],
    )

    response = completion.choices[0].message.content
    print(response)
    return response


def query_view(request):
    form1 = ProjectNameForm()
    form2 = TaskForm()
    projects = Project.objects.filter(user=request.user)
    # print(projects)
    # projectList = list()
    if request.method == "POST":
        prompt = request.POST.get("prompt")
        projectName = request.POST.get("project-name-input")

        form1 = ProjectNameForm(request.POST)
        form2 = TaskForm(request.POST)

        if prompt:
            response = get_completion(prompt)
            return JsonResponse({"response": response})
        elif form1.is_valid():
            project = form1.save(commit=False)
            project.name = form1.cleaned_data["name"]
            project.user = request.user
            project.save()
            return redirect("projects_and_tasks")
            # elif form2.is_valid():
            #     task = form2.save(commit=False)
            #     task.title = form1.cleaned_data["title"]
            #     task.description = form1.cleaned_data["description"]
            #     task.deadline = form1.cleaned_data["deadline"]

            return redirect("projects_and_tasks")
    context = {"form1": form1, "projects": projects}
    return render(request, "projects_and_tasks.html", context)


def projects(request):
    context = {"projects": projects}

    return render(request, "projects_and_tasks.html", context)


def tasks_and_AI_chat(request, project_id):
    form1 = ProjectNameForm()
    form2 = TaskCheckoffForm()

    projectEntry = Project.objects.get(id=project_id)
    projects = Project.objects.filter(user=request.user)
    tasks = Task.objects.filter(user=request.user, id=project_id)
    taskState = ""

    if request.method == "POST":
        form2 = TaskCheckoffForm(request.POST)
        if form2.is_valid():
            # task = form2.save(commit=False)
            # task.completion_status = form2.cleaned_data["completion_status"]
            # task.user = request.user
            # task.id = project_id
            # task.save()
            taskState = request.POST.get("taskCheckoff", False)
            print(taskState)
            # if taskState == 'on':
            # set task field to true
            # tasks = Task.objects.filter(user=request.user)
            # return redirect(f"/tasks_and_AI_chat/{projectEntry.id}")

    # if request.method == "GET":
    #     taskState = request.GET["taskCheckoff"]
    #     print(taskState)

    context = {
        "form1": form1,
        "form2": form2,
        "projects": projects,
        "projectEntry": projectEntry,
        "tasks": tasks,
        "taskState": taskState
        # "taskCheckoff": taskCheckoff,
    }
    return render(request, "tasks_and_AI_chat.html", context)


def create_task(request, project_id):
    form1 = ProjectNameForm()

    projects = Project.objects.filter(user=request.user)
    form3 = TaskForm()
    tasks = Task.objects.filter(user=request.user)
    projectEntry = Project.objects.get(id=project_id)
    if request.method == "POST":
        form3 = TaskForm(request.POST)
        if form3.is_valid():
            task = form3.save(commit=False)
            task.title = form3.cleaned_data["title"]
            task.description = form3.cleaned_data["description"]
            task.deadline = form3.cleaned_data["deadline"]
            task.project = projectEntry
            task.user = request.user
            task.id = project_id
            task.save()
            tasks = Task.objects.filter(user=request.user)
            return redirect(f"/tasks_and_AI_chat/{projectEntry.id}")
    context = {
        "form1": form1,
        "form3": form3,
        "projects": projects,
        "projectEntry": projectEntry,
        "tasks": tasks,
    }
    return render(request, "create_task.html", context)
