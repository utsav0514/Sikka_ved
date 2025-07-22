from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import Usercreate 



def register(request):
    if request.method == 'POST':
        form = Usercreate(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('login')  
    else:
        form = Usercreate()
    return render(request, 'users/register.html', {'form': form})

