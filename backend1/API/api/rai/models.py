from pyexpat import model
from django.db import models
from django.db.models.fields import DateField
from datetime import datetime
from django import forms
from datetime import datetime
# Create your models here.
class Critere(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')


class Status(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle
class Statusrapport(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')

class Priorite(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle

class Typrobleme(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')

class Role(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')

    def __str__(self):
        return self.Libelle
class Statusbqt(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')

    def __str__(self):
        return self.Libelle
class Mois(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle

class Periode(models.Model):

    mois = models.ForeignKey(Mois, on_delete=models.CASCADE,related_name='periode',blank=True)
    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle

class Bqt(models.Model):


    ComptRendus = models.CharField(max_length=10,blank=False, default='')
    uploadedFileCompteR = models.FileField(upload_to="Uploaded Files/",null=True,verbose_name='bqt doc')
    dateTimeOfUploadCompteR = models.DateTimeField(auto_now = True)
    uploadedFilePword = models.FileField(upload_to="Uploaded Files/",null=True,verbose_name='bqt doc')
    dateTimeOfUploadPowrd = models.DateTimeField(auto_now = True)
    Status = models.CharField(max_length=50,blank=False, default='')
    Libelle = models.CharField(max_length=200,blank=False, default='')
    datebqt = models.DateField()
   
    def __str__(self):
        return self.service

class Planactionbqt(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    bqt = models.ForeignKey(Bqt, on_delete=models.CASCADE,related_name='planbqt',blank=True)
    Porteur = models.CharField(max_length=300,blank=False, default='')
    Dateprevisionel =  models.DateField()
    Dateeffective =  models.DateField()
    Decision = models.CharField(max_length=200,blank=False, default='')
    Situation =models.CharField(max_length=200,blank=False, default='')
    Perimetre = models.CharField(max_length=200,blank=False, default='')
    Status = models.IntegerField()
    Efficacite = models.CharField(max_length=50,blank=False, default='')
    Commentaire = models.CharField(max_length=500,blank=False, default='')



class Toc(models.Model):
    
    priorite = models.CharField(max_length=4,blank=False, default='')
    Datedebut =  models.DateField()
    heurD = models.TimeField()
    Datefin =  models.DateField()
    heurF = models.TimeField()
    Rapport  = models.CharField(max_length=500,blank=False, default='')
    Description = models.CharField(max_length=500,blank=False, default='')

class TocTicket(models.Model):
    toctiket = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='toc',blank=True)
    Numero = models.CharField(max_length=50)
    def __str__(self):
        return self.Numero

class Service(models.Model):
    #tocserv = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='service',blank=True)
    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle
class Pays(models.Model):
    #tocpays = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='pays',blank=True)
    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle


class Platform(models.Model):
    #tocplat = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='plat',blank=True)
    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle
        

class Impact(models.Model):
    

    toc = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='Impactpays',blank=True)
    #service = models.ForeignKey(Service, on_delete=models.CASCADE,related_name='Impact',blank=True,null=True)
    #Platform = models.ForeignKey(Platform, on_delete=models.CASCADE,related_name='Impact',blank=True,null=True)
    pays = models.ForeignKey(Pays, on_delete=models.CASCADE,related_name='Impactpays',blank=True,null=True)
   #Libelle = models.CharField(max_length=500,blank=False, default='')
    def __str__(self):
        return self.pays


class Impactservice(models.Model):
    toc = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='Impactservice',blank=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE,related_name='Impactservice',blank=True)
    def __str__(self):
        return self.service

class Impactplatf(models.Model):
    toc = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='Impactplat',blank=True)
    Platform = models.ForeignKey(Platform, on_delete=models.CASCADE,related_name='Impactplat',blank=True,null=True)
    def __str__(self):
        return self.Platform


class Tocprobleme(models.Model):

    Numerotocpro = models.CharField(max_length=50)
    toc = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='tocpro',blank=True)
#    typeproblem = models.ForeignKey(Typrobleme, on_delete=models.CASCADE,related_name='tocpro',blank=True)
    typeproblem  = models.CharField(max_length=30,blank=False, default='')
    Porteur  = models.CharField(max_length=100,blank=False, default='')
    #Date =  models.DateField()
    #Dtatustocprob  = models.CharField(max_length=500,blank=False, default='')
    #Priorite = models.CharField(max_length=500,blank=False, default='')




class Planactions(models.Model):
    
    Libelle = models.CharField(max_length=200,blank=False, default='')
    tocpr = models.ForeignKey(Tocprobleme, on_delete=models.CASCADE,related_name='planrai',blank=True)
    Porteur = models.CharField(max_length=300,blank=False, default='')
    Commentaire = models.CharField(max_length=500,blank=False, default='')
    Dateprevisionel =  models.DateField()
    Dateeffective =  models.DateField()
    Perimetre =models.CharField(max_length=500,blank=False, default='')
    Status = models.IntegerField()
    Efficacite = models.CharField(max_length=50,blank=False, default='')
    Commentaire = models.CharField(max_length=500,blank=False, default='')

class Evaluation(models.Model):
    

   # Planaction = models.ForeignKey(Planaction, on_delete=models.CASCADE,related_name='evalrai',blank=True)
    Efficacite =  models.CharField(max_length=70,blank=False, default='')
    Commentaire = models.CharField(max_length=500,blank=False, default='')

class Evaluationbqt(models.Model):

    planactionbqt = models.ForeignKey(Planactionbqt, on_delete=models.CASCADE,related_name='Evalbqt',blank=True)
    Efficacite =  models.CharField(max_length=70,blank=False, default='')
    Commentaire = models.CharField(max_length=500,blank=False, default='')


class User(models.Model):

    role = models.ForeignKey(Role, on_delete=models.CASCADE,related_name='user',blank=True)
    Nom = models.CharField(max_length=300,blank=False, default='')
    Prenom = models.CharField(max_length=300,blank=False, default='')
    Poste =  models.CharField(max_length=100,blank=False, default='')
    Rang =  models.CharField(max_length=100,blank=False, default='')
    Pictur = models.ImageField(upload_to='images/',null=True)
    Email = models.EmailField(max_length=50)
    Contact = models.IntegerField()
    username =  models.CharField(max_length=100,null=True)
    password =  models.CharField(max_length=50,null=True)
    Statut = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return self.Nom

class UserConnect(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE,)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

class Declenchement(models.Model):

    Libelle = models.IntegerField()
        

class Rai(models.Model):

#    critere = models.ForeignKey(Critere, on_delete=models.CASCADE,related_name='rai',blank=True)
#    status =models.ForeignKey(Status, on_delete=models.CASCADE,related_name='rai',blank=True)
    tocprobleme = models.ForeignKey(Tocprobleme, on_delete=models.CASCADE,related_name='rai',blank=True)
#    declenchement =models.ForeignKey(Declenchement, on_delete=models.CASCADE,related_name='rai',blank=True)
    status = models.CharField(max_length=10,blank=False, default='')
    critere = models.CharField(max_length=10,blank=False, default='')
    declenchement = models.IntegerField()
    Rapportredige = models.CharField(max_length=5,blank=False, default='')
    Rapportpartage = models.CharField(max_length=5,blank=False, default='')
    Comptrendus = models.CharField(max_length=5,blank=False, default='')
    Jointoc = models.CharField(max_length=5,blank=False, default=''),
    Rairecu = models.CharField(max_length=5,blank=False, default=''),
    Cause = models.CharField(max_length=200,blank=False, default='')
    Rootcause = models.CharField(max_length=200,blank=False, default='',null=True)
    Statrootcause =models.CharField(max_length=200,blank=False, default='',null=True)
    Actionretablissement = models.CharField(max_length=200,blank=False, default='')
    EvaluationDate = models.DateField(null=True)
    Datecritere = models.DateField()
    Typesolution = models.CharField(max_length=100,blank=False, default='')
    Commentaire = models.CharField(max_length=100,blank=False, default='',null=True)
    DateRept = models.DateField()
    Rirecu = models.CharField(max_length=5,blank=False, default='')
    JoinToc = models.CharField(max_length=5,blank=False, default='')
    uploadedFileRI = models.FileField(upload_to = "Uploaded Files/",null=True)
    uploadedFileRAI = models.FileField(upload_to = "Uploaded Files/",null=True)
    dateTimeOfUpload = models.DateTimeField(auto_now = True) 
