from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from models import User

# Create your views here.

def index(request):
    if request.user.is_anonymous == False:
        return redirect("/home")
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
         # A backend authenticated the credentials
            
            return redirect('/home')
        else:
            # No backend authenticated the credentials
            return render(request, '/')

    return render(request, '/')

def signupUser(request):
    if request.method == "POST":
        name = request.POST.get("name")
        age = request.POST.get("age")
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = User(name = name, age = age, username = username, password = password)
        user.save()
