from django.contrib import admin
from .models import Doctor, Appointment, Qualification, Customer


class DoctorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone_number', 'email', 'organisation')


class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('speciality', 'city', 'date', 'time', 'status')


class QualificationAdmin(admin.ModelAdmin):
    list_display = ('institution', 'study', 'year')


class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone_number', 'email', 'gender', 'age')


admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Appointment, AppointmentAdmin)
admin.site.register(Qualification, QualificationAdmin)
admin.site.register(Customer, CustomerAdmin)
