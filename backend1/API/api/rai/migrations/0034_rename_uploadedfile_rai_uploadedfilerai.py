# Generated by Django 4.0.3 on 2022-07-13 16:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0033_rai_uploadedfileri'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rai',
            old_name='uploadedFile',
            new_name='uploadedFileRAI',
        ),
    ]