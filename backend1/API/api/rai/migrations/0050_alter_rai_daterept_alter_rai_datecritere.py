# Generated by Django 4.0.3 on 2022-07-28 04:07

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0049_alter_rai_daterept_alter_rai_datecritere'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rai',
            name='DateRept',
            field=models.DateField(default=datetime.datetime(2022, 7, 28, 4, 6, 44, 74990, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='rai',
            name='Datecritere',
            field=models.DateField(default=datetime.datetime(2022, 7, 28, 4, 7, 5, 315682, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
