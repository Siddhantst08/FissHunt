from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import ensure_csrf_cookie




# Create your views here.
def index3(request):
    return render(request, 'index.html')

def index(request):
    return render(request, 'index.html')

@ensure_csrf_cookie
def index2(request):
    
    if request.method == "POST":
        username = request.POST.get("email")
        password = request.POST.get("password")
        print(username, password)

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            print("hogyaaa")
            # A backend authenticated the credentials
            
            return redirect('/exchange')
        else:
            print("no hua")
            # No backend authenticated the credentials
            return render(request, '/login')

    return redirect('/login')
