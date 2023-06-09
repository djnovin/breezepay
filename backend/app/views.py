from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


from .serializers import ProductSerializer
from .models import Product

# Create your views here.


class CookieView(APIView):
    # retrieve the current cart contents from the cookie, or create a new cart if the cookie does not exist
    def get(self, request, format=None):
        cart = request.COOKIES.get('cart', None)
        if cart is None:
            cart = {}
        return Response(cart)

    # update the cart cookie with the new cart contents
    def put(self, request, format=None):
        cart = request.data
        response = Response(cart)
        response.set_cookie('cart', cart)
        return response

    # delete the cart cookie
    def delete(self, request, format=None):
        response = Response(status=status.HTTP_204_NO_CONTENT)
        response.delete_cookie('cart')
        return response


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()

    """
    A simple ViewSet for listing or retrieving products.
    """

    def list(self, request):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)

    def retrieve(self, request, pk=None):
        queryset = Product.objects.all()
        product = get_object_or_404(queryset, pk=pk)
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)
