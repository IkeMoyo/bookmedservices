from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, QualificationViewSet, CustomerViewSet, AppointmentViewSet, contact_us

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet, basename='doctor')

router2 = DefaultRouter()
router2.register(r'qualifications', QualificationViewSet, basename='qualification')

router3 = DefaultRouter()
router3.register(r'customers', CustomerViewSet, basename='customer')

router4 = DefaultRouter()
router4.register(r'appointments', AppointmentViewSet, basename='appointment')

urlpatterns = [
    path('contact-us/', contact_us, name='contact_us'),
]

urlpatterns += router.urls + router2.urls + router3.urls + router4.urls
