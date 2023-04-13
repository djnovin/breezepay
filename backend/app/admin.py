from django.contrib import admin
from .models import Product

# Register your models here.


class ProductModelAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False


admin.site.register(Product, ProductModelAdmin)
