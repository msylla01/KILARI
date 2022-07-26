from asyncio.format_helpers import extract_stack
from django.db.models import fields
from rest_framework import serializers

from rai.models import  *





class StatusrapportSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Statusrapport
        fields = '__all__'


class EvaluationbqtSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Evaluationbqt
        fields = '__all__'
        extra_kwargs = {'Planaction': {'required': False}}

class EvaluationSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Evaluation
        fields = '__all__'
        extra_kwargs = {'Planaction': {'required': False}}

     
class StatusbqtSerializers(serializers.ModelSerializer):
    # planbqt = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Statusbqt
        fields = '__all__'

class PeriodeSerializers(serializers.ModelSerializer):
    # planbqt = PlanactionbqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Periode
        fields = '__all__'
        extra_kwargs = {'mois': {'required': False}}

class MoisSerializers(serializers.ModelSerializer):
    periode = PeriodeSerializers(many=True, read_only=True)
    class Meta: 
        model = Mois
        fields = '__all__'



        

class UserSerializers(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = '__all__'
        extra_kwargs = {'role': {'required': False}}
class RoleSerializers(serializers.ModelSerializer):

    role = UserSerializers(many=True, read_only=True)
    class Meta:
        model = Role
        fields = '__all__'
        
class ImpactSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Impact
        fields = '__all__'
        extra_kwargs = {'toc': {'required': False},'service': {'required': False},'Platform': {'required': False},'pays': {'required': False}}



class ImpactpsSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Impactservice
        fields = '__all__'
        extra_kwargs = {'toc': {'required': False},'service': {'required': False}}

class ImpactppSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Impactplatf
        fields = '__all__'
        extra_kwargs = {'toc': {'required': False},'Platform': {'required': False}}

'''class ImpactpSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Impactpays
        fields = '__all__'
        extra_kwargs = {'toc': {'required': False},'pays': {'required': False}}

class ImpactpsSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Impactservice
        fields = '__all__'
        extra_kwargs = {'toc': {'required': False},'service': {'required': False}}

class ImpactppSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Impactplatf
        fields = '__all__'
        extra_kwargs = {'toc': {'required': False},'Platform': {'required': False}}
'''

class RaiSerializers(serializers.ModelSerializer):
    
    class Meta: 
        model = Rai
        fields = '__all__'
        extra_kwargs = {'tocprobleme': {'required': False}, 'declenchement': {'required': False},'status': {'required': False},'critere': {'required': False},}

class PlanactionsSerializers(serializers.ModelSerializer):   
    class Meta: 
        model = Planactions
        fields = '__all__'
        extra_kwargs = {'tocpr': {'required': False},}
        

class TocproblemeSerializers(serializers.ModelSerializer):
    rai = RaiSerializers(many=True, read_only=True)
    planrai = PlanactionsSerializers(many=True, read_only=True)
    class Meta: 
        model = Tocprobleme
        fields = '__all__'
        extra_kwargs = {'typeproblem': {'required': False},'toc': {'required': False}}


class PlanactionbqtSerializers(serializers.ModelSerializer):
    # role = EvaluationbqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Planactionbqt
        fields = '__all__'
        extra_kwargs = {'bqt': {'required': False}}

class BqtSerializers(serializers.ModelSerializer):
    planbqt = PlanactionbqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Bqt
        fields = '__all__'
        extra_kwargs = {'service': {'required': False},'platform': {'required': False},'statusbqt': {'required': False},'periode': {'required': False}}
   



class ServiceSerializers(serializers.ModelSerializer):
    #Impact = ImpactSerializers(many=True, read_only=True)
    Impactservice = ImpactpsSerializers(many=True, read_only=True)
    # planbqt = PlanactionbqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Service
        fields = '__all__'
        #extract_kwargs = {'tocserv': {'required': False}}



class PlatformSerializers(serializers.ModelSerializer):
    #Impact = ImpactSerializers(many=True, read_only=True)
    Impactplat = ImpactppSerializers(many=True, read_only=True)
    # planbqt = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Platform
        fields = '__all__'
        #extract_kwargs = {'tocplat': {'required': False}}
   



class PaysSerializers(serializers.ModelSerializer):
    Impactpays = ImpactSerializers(many=True, read_only=True)
    #Impact = ImpactpSerializers(many=True, read_only=True)
    
    class Meta: 
        model = Pays
        fields = '__all__'
        #extract_kwargs = {'tocpays': {'required': False}}


class TocTicketSerializers(serializers.ModelSerializer):
    #planrai = PlanactionsSerializers(many=True, read_only=True)
    
    class Meta:
        model = TocTicket
        fields = '__all__'
        extract_kwargs = {'toctiket': {'required': False}}


class TocSerializers(serializers.ModelSerializer):
    Impactpays = ImpactSerializers(many=True, read_only=True)
    Impactservice = ImpactpsSerializers(many=True, read_only=True)
    Impactplat = ImpactppSerializers(many=True, read_only=True)
    tocpro = TocproblemeSerializers(many=True, read_only=True)
    toc =  TocTicketSerializers(many=True, read_only=True)
    pays =  PaysSerializers(many=True, read_only=True)
    #service =  ServiceSerializers(many=True, read_only=True)
    #plat =  PlatformSerializers(many=True, read_only=True)
    class Meta: 
        model = Toc
        fields = '__all__'
        extra_kwargs = {'priorite': {'required': False},}




class PrioriteSerializers(serializers.ModelSerializer):
    toc = TocSerializers(many=True, read_only=True)
    class Meta: 
        model = Priorite
        fields = '__all__'


class TyproblemeSerializers(serializers.ModelSerializer):
    tocpro = TocproblemeSerializers(many=True, read_only=True)
    class Meta: 
        model = Typrobleme
        fields = '__all__'

class UserConnectSerializers(serializers.ModelSerializer):
    class Meta: 
        model = UserConnect
        fields = '__all__'

class DeclenchementSerializers(serializers.ModelSerializer):
    rai = RaiSerializers(many=True, read_only=True)
    class Meta: 
        model = Declenchement
        fields = '__all__'

class CritereSerializers(serializers.ModelSerializer):
    rai = RaiSerializers(many=True, read_only=True)
    class Meta: 
        model = Critere
        fields = '__all__'

class StatusSerializers(serializers.ModelSerializer):
    rai = RaiSerializers(many=True, read_only=True)
    class Meta: 
        model = Status
        fields = '__all__'
