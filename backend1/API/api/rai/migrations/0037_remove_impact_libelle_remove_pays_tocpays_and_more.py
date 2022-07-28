# Generated by Django 4.0.4 on 2022-07-26 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0036_alter_rai_commentaire_alter_rai_typesolution'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='impact',
            name='Libelle',
        ),
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
        migrations.AddField(
            model_name='impact',
            name='pays',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Impact', to='rai.pays'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='bqt',
            name='ComptRendus',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='rai',
            name='Typesolution',
            field=models.CharField(default='', max_length=100),
        ),
    ]