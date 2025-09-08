from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, null=False)
    grade = models.CharField(max_length=10)
    def __str__(self):
        return self.name