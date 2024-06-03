from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from .models import Doctor, Qualification, Appointment, Customer
from .serializers import DoctorSerializer, QualificationSerializer, AppointmentSerializer, CustomerSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        if Doctor.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
        return super().create(request, *args, **kwargs)


class QualificationViewSet(viewsets.ModelViewSet):
    queryset = Qualification.objects.all()
    serializer_class = QualificationSerializer


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


@api_view(['POST'])
def contact_us(request):
    if request.method == 'POST':
        first_name = request.data.get('firstName')
        last_name = request.data.get('lastName')
        phone_number = request.data.get('phoneNumber')
        email = request.data.get('email')
        subject = request.data.get('subject')
        message = request.data.get('message')

        email_body = render_to_string('contact_us_email.html', {
            'sender': f'{first_name} {last_name}',
            'phone': phone_number,
            'email': email,
            'message': message
        })

        to_email = ['your_email', 'your_email2']  # Replace with your admin email address
        email = EmailMessage(subject, email_body, to=to_email)
        email.content_subtype = 'html'
        email.send()

        return Response({'message': 'Email sent successfully!'})
    else:
        return Response({'error': 'Email not sent'})

