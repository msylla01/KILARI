# Generated by Django 4.0.3 on 2022-05-16 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0010_alter_tocprobleme_numerotocpro_alter_tocticket_toc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tocprobleme',
            name='Numerotocpro',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='tocticket',
            name='Numero',
            field=models.CharField(max_length=50),
        ),
    ]
