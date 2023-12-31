# Generated by Django 4.2.3 on 2023-07-31 16:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('depnowAppMVC', '0002_article_badge_focussession_streak_tally_task_user_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Reflection',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('entry_date', models.DateField()),
                ('productivity_rating', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='UserSubject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.DeleteModel(
            name='Article',
        ),
        migrations.AddField(
            model_name='badge',
            name='threshold_hours',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='tally',
            name='hours_count',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='badge',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='focussession',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='streak',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='tally',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='task',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AddField(
            model_name='usersubject',
            name='primary_key',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_subjects', to='depnowAppMVC.user'),
        ),
        migrations.AddField(
            model_name='usersubject',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.subject'),
        ),
        migrations.AddField(
            model_name='usersubject',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.user'),
        ),
        migrations.AddField(
            model_name='reflection',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.user'),
        ),
        migrations.AddField(
            model_name='project',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.subject'),
        ),
        migrations.AddField(
            model_name='project',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.user'),
        ),
        migrations.AddField(
            model_name='tally',
            name='project',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.project'),
        ),
        migrations.AddField(
            model_name='task',
            name='project',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='depnowAppMVC.project'),
        ),
    ]
