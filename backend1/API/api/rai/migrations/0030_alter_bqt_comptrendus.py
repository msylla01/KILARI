# Generated by Django 4.0.4 on 2022-07-26 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0029_alter_bqt_comptrendus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(default='', max_length=100, null=True),
        ),
    ]
