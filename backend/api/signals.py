from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Appointment, Doctor
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


@receiver(post_save, sender=Appointment)
def send_appointment_email(sender, instance, created, **kwargs):
    if created:
        subject = 'New Appointment Scheduled'
        customer_content = render_to_string('appointment_customer_email.html', {'appointment': instance})
        doctor_content = render_to_string('appointment_doctor_email.html', {'appointment': instance})
        admin_content = render_to_string('appointment_customer_email.html', {'appointment': instance})

        emails = [
            (EmailMultiAlternatives(
                subject,
                'Appointment details are in HTML format. Please enable HTML to view.',
                'your_email',
                [instance.customer.email],
            ), customer_content),
            (EmailMultiAlternatives(
                subject,
                'Appointment details are in HTML format. Please enable HTML to view.',
                'your_email',
                ['your_email'],
            ), admin_content),
            (EmailMultiAlternatives(
                subject,
                'Appointment details are in HTML format. Please enable HTML to view.',
                'your_email',
                [instance.doctor.email],
            ), doctor_content)
        ]

        for email in emails:
            email[0].attach_alternative(email[1], mimetype='text/html')
            email[0].send()


@receiver(post_save, sender=Doctor)
def send_appointment_email(sender, instance, created, **kwargs):
    if created:
        subject = 'BookMediServices Join Us Application'
        doctor_content = render_to_string('doctor_email.html', {'doctor': instance})
        admin_content = render_to_string('admin_doctor_email.html', {'doctor': instance})

        emails = [
            (EmailMultiAlternatives(
                subject,
                'Appointment details are in HTML format. Please enable HTML to view.',
                'your_email',
                ['your_email'],
            ), admin_content),
            (EmailMultiAlternatives(
                subject,
                'Appointment details are in HTML format. Please enable HTML to view.',
                'your_email',
                [instance.email],
            ), doctor_content)
        ]

        for email in emails:
            email[0].attach_alternative(email[1], mimetype='text/html')
            email[0].send()
