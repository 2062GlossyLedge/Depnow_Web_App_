"""
Django settings for depnowApp project.

Generated by 'django-admin startproject' using Django 4.2.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import environ
import os

env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

ALLOWED_HOSTS = ["*", "https://depnowwebapp.azurewebsites.net"]
CSRF_TRUSTED_ORIGINS = ["https://depnowwebapp.azurewebsites.net"]

SECRET_KEY = "0ec1a6f379cdb49bceb0250923043a7e62a6b2cee9145d1d8be02a3fdbfc1055"
# os.getenv("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    # My apps
    "depnowAppMVC",
    "users",
    # Third party apps
    "bootstrap5",
    "rest_framework",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django_extensions",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
ROOT_URLCONF = "depnowApp.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "APP_DIRS": True,
        "DIRS": [
            os.path.join(
                "/Users/Ayden Smith/OneDrive/Documents/Personal_Projects/depnow2/Depnow_Web_App_/depnowApp/depnowAppMVC",
                "templates",
            )
        ],
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "depnowApp.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends.postgresql_psycopg2',
    #     'NAME': env("DB_NAME"),
    #     'USER': env("DB_USER"),
    #     'PASSWORD': env("DB_PASSWORD"),
    #     'HOST': env("DB_HOST"),
    #     'PORT': env("DB_PORT"),
    # }
}

# hostname = os.environ["DBHOST"]
# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.postgresql",
#         "NAME": os.environ["DBNAME"],
#         "HOST": hostname + ".postgres.database.azure.com",
#         "USER": os.environ["DBUSER"],
#         "PASSWORD": os.environ["DBPASS"],
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

# Define the static URL and the directory where static files are collected

STATIC_URL = "static/"

STATIC_ROOT = BASE_DIR / "static"

# Add the directory where your static files (CSS, JS, images, etc.) are located
STATICFILES_DIRS = [
    BASE_DIR / "depnowAppMVC" / "static",
]

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Specify the directory where uploaded media files will be stored
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Specify the base URL for serving media files
MEDIA_URL = "/media/"

# if "https://depnowwebapp.azurewebsites.net/" in os.environ:  # Running on Azure
#     from .azure import *
# redeploy
