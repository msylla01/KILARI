# Generated by Django 4.0.3 on 2022-07-13 16:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rai', '0030_alter_bqt_uploadedfilecompter_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bqt',
            name='uploadedFileCompteR',
        ),
        migrations.RemoveField(
            model_name='bqt',
            name='uploadedFilePword',
        ),
        migrations.RemoveField(
            model_name='rai',
            name='uploadedFile',
        ),
        migrations.RemoveField(
            model_name='toc',
            name='pays',
        ),
        migrations.RemoveField(
            model_name='toc',
            name='toctik',
        ),
        migrations.AddField(
            model_name='pays',
            name='tocpays',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='pays', to='rai.toc'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='platform',
            name='tocplat',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='plat', to='rai.toc'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='service',
            name='tocserv',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='service', to='rai.toc'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tocticket',
            name='toctiket',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='toc', to='rai.toc'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='Statut',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
