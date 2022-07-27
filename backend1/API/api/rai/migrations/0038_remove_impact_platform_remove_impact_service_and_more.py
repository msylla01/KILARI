# Generated by Django 4.0.4 on 2022-07-26 21:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0037_remove_impact_libelle_remove_pays_tocpays_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='impact',
            name='Platform',
        ),
        migrations.RemoveField(
            model_name='impact',
            name='service',
        ),
        migrations.AlterField(
            model_name='impact',
            name='pays',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Impactpays', to='rai.pays'),
        ),
        migrations.AlterField(
            model_name='impact',
            name='toc',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='Impactpays', to='rai.toc'),
        ),
        migrations.CreateModel(
            name='Impactservice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='Impactservice', to='rai.service')),
                ('toc', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='Impactservice', to='rai.toc')),
            ],
        ),
        migrations.CreateModel(
            name='Impactplatf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Platform', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Impactplat', to='rai.platform')),
                ('toc', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='Impactplat', to='rai.toc')),
            ],
        ),
    ]
