# Generated by Django 4.0.5 on 2022-06-27 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0023_planactionbqt_efficacite_planactionbqt_perimetre_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bqt',
            name='periode',
        ),
        migrations.RemoveField(
            model_name='bqt',
            name='platform',
        ),
        migrations.RemoveField(
            model_name='bqt',
            name='service',
        ),
        migrations.RemoveField(
            model_name='bqt',
            name='statusbqt',
        ),
        migrations.AddField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='bqt',
            name='Libelle',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='bqt',
            name='Status',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='planactionbqt',
            name='Decision',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='planactionbqt',
            name='Situation',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='planactionbqt',
            name='Status',
            field=models.IntegerField(),
        ),
    ]
