# Generated by Django 4.0.3 on 2022-05-16 12:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0007_remove_planactions_dateevaluation'),
    ]

    operations = [
        migrations.CreateModel(
            name='TocTicket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Numero', models.IntegerField(max_length=50)),
            ],
        ),
        migrations.RemoveField(
            model_name='planactions',
            name='incident',
        ),
        migrations.RemoveField(
            model_name='toc',
            name='Numerotoc',
        ),
        migrations.RemoveField(
            model_name='toc',
            name='SerPlat',
        ),
        migrations.RemoveField(
            model_name='tocprobleme',
            name='Priorite',
        ),
        migrations.AddField(
            model_name='planactions',
            name='Tocprobleme',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='planrai', to='rai.tocprobleme'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Incident',
        ),
        migrations.AddField(
            model_name='tocticket',
            name='toc',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='Tocticket', to='rai.toc'),
        ),
    ]
