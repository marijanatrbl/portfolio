from django.http import JsonResponse
from .models import Project
from .models import GalleryImage

def projects(request):
    qs = Project.objects.all()
    data = [
        {
            "id": project.id,
            "title": project.title,
            "description": project.description,
            "date": project.date,  
            "image": project.image.url if project.image else None,
        }
        for project in qs
    ]
    return JsonResponse(data, safe=False)

def gallery(request):
    qs = GalleryImage.objects.all()

    data = [
        {
            "id": img.id,
            "title": img.title,
            "description": img.description,
            "image": img.image.url if img.image else None,
            
        }
        for img in qs
    ]

    return JsonResponse(data, safe=False)