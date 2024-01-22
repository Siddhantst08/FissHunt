from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
 


# Create your views here.

def index(request):
    return render(request, 'index.html')

def index2(request):
    
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        print(username, password)

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            # A backend authenticated the credentials
            
            return redirect('home.html')
        else:
            # No backend authenticated the credentials
            return render(request, 'index.html')

    return render(request, 'index.html')
