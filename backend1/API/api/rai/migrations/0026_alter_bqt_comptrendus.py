# Generated by Django 4.0.4 on 2022-07-25 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0025_remove_toc_serplat_remove_toc_pays_remove_toc_toctik_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(default='', max_length=500),
        ),
    ]
