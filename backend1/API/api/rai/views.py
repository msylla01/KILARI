from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import viewsets

from rai.models import *
from rai.serializers import *




class UserConnectViewSet(viewsets.ModelViewSet):
    serializer_class = UserConnectSerializers
    queryset = UserConnect.objects.all()

    
class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializers
    queryset = Role.objects.all()



class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializers
    queryset = User.objects.all()

class CritereViewSet(viewsets.ModelViewSet):
    serializer_class = CritereSerializers
    queryset = Critere.objects.all()

class StatusViewSet(viewsets.ModelViewSet):
    serializer_class = StatusSerializers
    queryset = Status.objects.all()

class StatusrapportViewSet(viewsets.ModelViewSet):
    serializer_class = StatusrapportSerializers
    queryset = Statusrapport.objects.all()

class PaysViewSet(viewsets.ModelViewSet):
    serializer_class = PaysSerializers
    queryset = Pays.objects.all()

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializers
    queryset = Service.objects.all()

class PlatformViewSet(viewsets.ModelViewSet):
    serializer_class = PlatformSerializers
    queryset = Platform.objects.all()



class TyproblemeViewSet(viewsets.ModelViewSet):
    serializer_class = TyproblemeSerializers
    queryset = Typrobleme.objects.all()

class StatusbqtViewSet(viewsets.ModelViewSet):
    serializer_class = StatusbqtSerializers
    queryset = Statusbqt.objects.all()



class PrioriteViewSet(viewsets.ModelViewSet):
    serializer_class = PrioriteSerializers
    queryset = Priorite.objects.all()



class MoisViewSet(viewsets.ModelViewSet):
    serializer_class =MoisSerializers
    queryset = Mois.objects.all()



class PeriodeViewSet(viewsets.ModelViewSet):
    serializer_class = PeriodeSerializers
    queryset = Periode.objects.all()




class PlanactionbqtViewSet(viewsets.ModelViewSet):
    serializer_class = PlanactionbqtSerializers
    queryset = Planactionbqt.objects.all()


class TocViewSet(viewsets.ModelViewSet):
    serializer_class = TocSerializers
    queryset = Toc.objects.all()

class PlanactionsViewSet(viewsets.ModelViewSet):
    serializer_class = PlanactionsSerializers
    queryset = Planactions.objects.all()

class TocTicketViewSet(viewsets.ModelViewSet):
    serializer_class = TocTicketSerializers
    queryset = TocTicket.objects.all()

class EvaluationViewSet(viewsets.ModelViewSet):
    serializer_class = EvaluationSerializers
    queryset = Evaluation.objects.all()

class EvaluationbqtViewSet(viewsets.ModelViewSet):
    serializer_class = EvaluationbqtSerializers
    queryset = Evaluationbqt.objects.all()

class ImpactViewSet(viewsets.ModelViewSet):
    serializer_class = ImpactSerializers
    queryset = Impact.objects.all()

class ImpactpsViewSet(viewsets.ModelViewSet):
    serializer_class = ImpactpsSerializers
    queryset = Impact.objects.all()

class ImpactppViewSet(viewsets.ModelViewSet):
    serializer_class = ImpactppSerializers
    queryset = Impact.objects.all()
'''class ImpactpViewSet(viewsets.ModelViewSet):
    serializer_class = ImpactpSerializers
    queryset = Impact.objects.all()

class ImpactpsViewSet(viewsets.ModelViewSet):
    serializer_class = ImpactpsSerializers
    queryset = Impact.objects.all()

class ImpactppViewSet(viewsets.ModelViewSet):
    serializer_class = ImpactppSerializers
    queryset = Impact.objects.all()
'''
class RaiViewSet(viewsets.ModelViewSet):
    serializer_class = RaiSerializers
    queryset = Rai.objects.all()


class TocproblemeViewSet(viewsets.ModelViewSet):
    serializer_class = TocproblemeSerializers
    queryset = Tocprobleme.objects.all()

class BqtViewSet(viewsets.ModelViewSet):
    serializer_class = BqtSerializers
    queryset = Bqt.objects.all()

class DeclenchementViewSet(viewsets.ModelViewSet):
    serializer_class = DeclenchementSerializers
    queryset = Declenchement.objects.all()
# Create your views here.

