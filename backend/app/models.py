from django.db import models
# Create your models here.


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    image_url = models.CharField(max_length=2083)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
