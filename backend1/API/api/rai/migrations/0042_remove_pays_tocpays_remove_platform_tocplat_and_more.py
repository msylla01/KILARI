# Generated by Django 4.0.3 on 2022-07-26 13:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0041_alter_bqt_comptrendus'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pays',
            name='tocpays',
        ),
        migrations.RemoveField(
            model_name='platform',
            name='tocplat',
        ),
        migrations.RemoveField(
            model_name='service',
            name='tocserv',
        ),
    ]