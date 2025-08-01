from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post



def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)

class PostListView(ListView):
    model = Post
    template_name = 'blog/home.html'  # <app>/<model>_<viewtype>.html
    context_object_name = 'posts'
    ordering = ['-date_posted']  # Order by date_posted in descending order

class PostDetailtView(DetailView):
    model = Post


def about(request):
    return render(request, 'blog/about.html', {'title': 'about'})