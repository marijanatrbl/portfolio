from django.db import models

class Project(models.Model) :
    title = models.CharField(max_length=20)
    description = models.TextField()
    date = models.CharField(max_length=20)
    image = models.ImageField(upload_to="projects/", blank=True, null=True)

    def __str__(self):
        return self.title

class GalleryImage(models.Model) :
    title = models.CharField(max_length=20)
    description = models.TextField()
    image = models.ImageField(upload_to="gallery/", blank=True, null=True)

    def __str__(self):
        return self.title