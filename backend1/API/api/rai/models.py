from django.db import models
from django.db.models.fields import DateField
from datetime import datetime
from django import forms
  
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
class Pays(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle
class Service(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    def __str__(self):
        return self.Libelle

class Platform(models.Model):

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

    service = models.ForeignKey(Service, on_delete=models.CASCADE,related_name='bqt',blank=True)
    platform = models.ForeignKey(Platform, on_delete=models.CASCADE,related_name='bqt',blank=True)
    statusbqt = models.ForeignKey(Statusbqt, on_delete=models.CASCADE,related_name='bqt',blank=True)
    periode = models.ForeignKey(Periode, on_delete=models.CASCADE,related_name='bqt',blank=True)
    datebqt = models.DateField()
    def __str__(self):
        return self.service

class Planactionbqt(models.Model):

    Libelle = models.CharField(max_length=200,blank=False, default='')
    bqt = models.ForeignKey(Bqt, on_delete=models.CASCADE,related_name='planbqt',blank=True)
    Porteur = models.CharField(max_length=300,blank=False, default='')
    Dateprevisionel =  models.DateField()
    Dateeffective =  models.DateField()
    Status = models.CharField(max_length=50,blank=False, default='')
    Commentaire = models.CharField(max_length=500,blank=False, default='')

class TocTicket(models.Model):
    Numero = models.CharField(max_length=50)

class Toc(models.Model):
    #Numerotoc = models.CharField(max_length=50)
    toctik = models.ForeignKey(TocTicket, on_delete=models.CASCADE,related_name='toc',blank=True)
#   priorite = models.ForeignKey(Priorite, on_delete=models.CASCADE,related_name='toc',blank=True)
    priorite = models.CharField(max_length=4,blank=False, default='')
    #pays = models.ForeignKey(Pays, on_delete=models.CASCADE,related_name='toc',blank=True)
    pays = models.CharField(max_length=15,blank=False, default='')
    Datedebut =  models.DateField()
    heurD = models.TimeField()
    Datefin =  models.DateField()
    heurF = models.TimeField()
    Rapport  = models.CharField(max_length=500,blank=False, default='')
    Description = models.CharField(max_length=500,blank=False, default='')
    SerPlat = models.CharField(max_length=20,blank=False, default='')


    


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
    Email = models.EmailField(max_length=50)
    Contact = models.IntegerField()
    username =  models.CharField(max_length=100,null=True)
    password =  models.CharField(max_length=50,null=True)

    def __str__(self):
        return self.Nom

class UserConnect(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE,)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    






class Impact(models.Model):
    

    toc = models.ForeignKey(Toc, on_delete=models.CASCADE,related_name='Impact',blank=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE,related_name='Impact',blank=True)
    Platform = models.ForeignKey(Platform, on_delete=models.CASCADE,related_name='Impact',blank=True)
    Libelle = models.CharField(max_length=500,blank=False, default='')
    def __str__(self):
        return self.Libelle

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
    Rootcause = models.CharField(max_length=200,blank=False, default='')
    Statrootcause =models.CharField(max_length=200,blank=False, default='')
    Actionretablissement = models.CharField(max_length=200,blank=False, default='')
    Datecritere = models.DateField()
    Typesolution = models.CharField(max_length=100,blank=False, default='')
    Commentaire = models.CharField(max_length=100,blank=False, default='')
    DateRept = models.DateField( )
    Rirecu = models.CharField(max_length=5,blank=False, default='')
    JoinToc = models.CharField(max_length=5,blank=False, default='')



######


        
        