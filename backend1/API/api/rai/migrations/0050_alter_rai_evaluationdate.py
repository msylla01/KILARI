# Generated by Django 4.0.3 on 2022-07-27 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0049_alter_impact_pays_alter_impact_toc_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rai',
            name='EvaluationDate',
            field=models.DateField(null=True),
        ),
    ]
