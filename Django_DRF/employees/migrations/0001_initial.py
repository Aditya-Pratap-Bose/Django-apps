# Generated by Django 5.2.4 on 2025-07-10 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp_id', models.CharField(max_length=20)),
                ('emp_name', models.CharField(max_length=50)),
                ('designation', models.CharField(max_length=50)),
            ],
        ),
    ]
