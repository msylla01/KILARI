# Generated by Django 4.0.3 on 2022-07-28 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0047_alter_rai_evaluationdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rai',
            name='EvaluationDate',
            field=models.DateField(default=None, null=True),
        ),
    ]
