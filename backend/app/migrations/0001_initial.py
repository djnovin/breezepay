# Generated by Django 4.2 on 2023-04-13 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('stock', models.IntegerField()),
                ('image_url', models.CharField(max_length=2083)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
