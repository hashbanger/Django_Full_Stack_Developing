from django.db import models

# Create your models here.
class Topic(models.Model):
    top_name = models.CharField(max_length = 160, unique = True)

    def __str___(self):
        return self.top_name

class Webpage(models.Model):
     topic = models.ForeignKey(Topic, on_delete=models.PROTECT)
     name = models.CharField(max_length = 160, unique = True)
     url = models.URLField(unique = True)

     def __str__(self):
         return self.name

class AccessRecord(models.Model):
    name = models.ForeignKey(Webpage, on_delete=models.PROTECT)
    date = models.DateField()

    def __str__(self):
        return str(self.date)

# make sure you run the following command after running make migrations command
#python manage.py migrate --run-syncdb