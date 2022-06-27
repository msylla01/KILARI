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

class PlanactionbqtSerializers(serializers.ModelSerializer):
    role = EvaluationbqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Planactionbqt
        fields = '__all__'
        extra_kwargs = {'bqt': {'required': False}}

class BqtSerializers(serializers.ModelSerializer):
    planbqt = EvaluationbqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Bqt
        fields = '__all__'
        extra_kwargs = {'service': {'required': False},'platform': {'required': False},'statusbqt': {'required': False},'periode': {'required': False}}
        
class StatusbqtSerializers(serializers.ModelSerializer):
    planbqt = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Statusbqt
        fields = '__all__'

class PeriodeSerializers(serializers.ModelSerializer):
    planbqt = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Periode
        fields = '__all__'
        extra_kwargs = {'mois': {'required': False}}

class MoisSerializers(serializers.ModelSerializer):
    periode = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Mois
        fields = '__all__'

class PlanactionsSerializers(serializers.ModelSerializer):   
    class Meta: 
        model = Planactions
        fields = '__all__'
        extra_kwargs = {'tocpr': {'required': False},}
        


        

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
        extra_kwargs = {'toc': {'required': False},'service': {'required': False},'Platform': {'required': False}}



class ServiceSerializers(serializers.ModelSerializer):
    Impact = ImpactSerializers(many=True, read_only=True)
    planbqt = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Service
        fields = '__all__'

class PlatformSerializers(serializers.ModelSerializer):
    Impact = ImpactSerializers(many=True, read_only=True)
    planbqt = BqtSerializers(many=True, read_only=True)
    class Meta: 
        model = Platform
        fields = '__all__'


class RaiSerializers(serializers.ModelSerializer):
    
    class Meta: 
        model = Rai
        fields = '__all__'
        extra_kwargs = {'tocprobleme': {'required': False}, 'declenchement': {'required': False},'status': {'required': False},'critere': {'required': False},}


class TocproblemeSerializers(serializers.ModelSerializer):
    rai = RaiSerializers(many=True, read_only=True)
    planrai = PlanactionsSerializers(many=True, read_only=True)
    class Meta: 
        model = Tocprobleme
        fields = '__all__'
        extra_kwargs = {'typeproblem': {'required': False},'toc': {'required': False}}

class TocSerializers(serializers.ModelSerializer):
    Impact = ImpactSerializers(many=True, read_only=True)
    tocpro = TocproblemeSerializers(many=True, read_only=True)
    
    class Meta: 
        model = Toc
        fields = '__all__'
        extra_kwargs = {'priorite': {'required': False},'pays': {'required': False},'toctik': {'required': False}}




class TocTicketSerializers(serializers.ModelSerializer):
    #planrai = PlanactionsSerializers(many=True, read_only=True)
    toc =  TocSerializers(many=True, read_only=True)
    class Meta:
        model = TocTicket
        fields = '__all__'

        
class PrioriteSerializers(serializers.ModelSerializer):
    toc = TocSerializers(many=True, read_only=True)
    class Meta: 
        model = Priorite
        fields = '__all__'



class PaysSerializers(serializers.ModelSerializer):
    toc = TocSerializers(many=True, read_only=True)

    class Meta: 
        model = Pays
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
