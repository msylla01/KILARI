# Generated by Django 4.0.4 on 2022-07-26 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0033_alter_bqt_comptrendus_alter_rai_commentaire'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='rai',
            name='Typesolution',
            field=models.CharField(default='', max_length=100),
        ),
    ]
