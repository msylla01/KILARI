# Generated by Django 4.0.4 on 2022-07-27 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0042_alter_rai_evaluationdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rai',
            name='EvaluationDate',
            field=models.DateField(null=True),
        ),
    ]
