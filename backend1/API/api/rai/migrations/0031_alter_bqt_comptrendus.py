# Generated by Django 4.0.4 on 2022-07-26 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0030_alter_bqt_comptrendus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(blank=True, default='', max_length=100, null=True),
        ),
    ]
