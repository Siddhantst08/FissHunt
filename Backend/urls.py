from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name = 'index'),
    path("login", views.index2, name = 'index2'),
    path("exchange", views.index3, name = 'index3')
]
