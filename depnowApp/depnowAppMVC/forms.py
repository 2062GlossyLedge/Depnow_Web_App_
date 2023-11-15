# forms.py
from django import forms
from .models import *
import datetime


from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class FocusedTimeStart(forms.ModelForm):
    # start_time = forms.DateTimeField(help_text="Enter when you started your focus session.")

    def cleanStartDate(self):
        data = self.cleaned_data["start_time"]

        if data > datetime.date.today():
            raise ValidationError(_("Invalid start time - Cant be set in the future"))

        return data

    class Meta:
        model = FocusSession
        fields = ["start_time"]
        labels = {"start_time": _("Start time")}
        help_texts = {"start_time": _("Enter when you started your focus session")}
        widgets = {"text": forms.DateTimeField()}


class FocusedTimeEnd(forms.ModelForm):
    # start_time = forms.DateTimeField(help_text="Enter when you started your focus session.")

    def CleanEndDate(self):
        data = self.cleaned_data["end_time"]

        if data > datetime.date.today():
            raise ValidationError(_("Invalid end time - Cant be set in the future"))

        return data

    class Meta:
        model = FocusSession
        fields = ["end_time"]
        labels = {"end_time": _("end time")}
        help_texts = {"end_time": _("Enter when you started your focus session")}
        widgets = {"text": forms.DateTimeField()}

        # 'end_date': _("Enter when you ended your focus session") 'end_date': _('End time')


class ProjectNameForm(forms.ModelForm):
    # need to clean data also when using modelform?
    class Meta:
        model = Project
        fields = ["name"]
        # help_texts = {'name': _('Enter projet name')}
        # widgets = {'text': forms.TextInput(), 'placeholder': 'Enter project name'}
        # widgets = {"name": forms.TextInput(attrs={"placeholder": "Enter project name"})}


class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ["title", "description", "deadline"]
