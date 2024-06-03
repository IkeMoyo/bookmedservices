# Generated by Django 5.0.1 on 2024-01-24 09:47

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_appointment_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='address',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='doctor',
            name='city',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
    ]
