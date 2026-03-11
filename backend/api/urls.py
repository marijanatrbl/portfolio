from django.urls import path
from .views import projects 
from .views import gallery

urlpatterns = [
    path("projects/", projects),  
    path("gallery/", gallery),
] 