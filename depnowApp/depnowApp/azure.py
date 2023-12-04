from .settings import *
import os

ALLOWED_HOSTS = (
    ["https://depnowwebapp.azurewebsites.net/"]
    if "https://depnowwebapp.azurewebsites.net/" in os.environ
    else []
)
CSRF_TRUSTED_ORIGINS = (
    ["https://depnowwebapp.azurewebsites.net/"]
    if "https://depnowwebapp.azurewebsites.net/" in os.environ
    else []
)
