# Generated by Django 4.0.3 on 2022-07-08 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0029_alter_bqt_uploadedfilecompter_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bqt',
            name='uploadedFileCompteR',
            field=models.FileField(null=True, upload_to='Uploaded Files/', verbose_name='bqt doc'),
        ),
        migrations.AlterField(
            model_name='bqt',
            name='uploadedFilePword',
            field=models.FileField(null=True, upload_to='Uploaded Files/', verbose_name='bqt doc'),
        ),
    ]