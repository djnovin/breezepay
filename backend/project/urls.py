from django.urls import path, include
# from django.contrib import admin

# Wire up our API using automatic URL routing.
urlpatterns = [
    path('', include('app.urls')),
]
