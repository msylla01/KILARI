# Generated by Django 4.0.4 on 2022-07-26 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0032_alter_bqt_comptrendus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(default='', max_length=4),
        ),
        migrations.AlterField(
            model_name='rai',
            name='Commentaire',
            field=models.CharField(default='', max_length=100),
        ),
    ]
