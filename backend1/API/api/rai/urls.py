from django import urls
from django.urls import re_path 
from django.urls.resolvers import URLPattern
from rai import views



from django.urls import path, include  # Ensure `include` is imported
from rest_framework import routers
from rai.views import *

# Notes router
notes_router = routers.SimpleRouter()
notes_router.register(
    r'role',
    RoleViewSet,
    basename='role',)
notes_router.register(
    r'user',
    UserViewSet,
    basename='user',)

notes_router.register(
    r'tocprobleme',
    TocproblemeViewSet,
    basename='tocprobleme',)

notes_router.register(
    r'rai',
    RaiViewSet,
    basename='rai',)

notes_router.register(
    r'impact',
    ImpactViewSet,
    basename='impact',)

notes_router.register(
    r'evaluationbqt',
    EvaluationbqtViewSet,
    basename='evaluationbqt',)

notes_router.register(
    r'evaluation',
    EvaluationViewSet,
    basename='evaluation',)


notes_router.register(
    r'planaction',
    PlanactionsViewSet,
    basename='planaction',)
notes_router.register(
    r'tocticket',
    TocTicketViewSet,
    basename='toctiket',)

notes_router.register(
    r'toc',
    TocViewSet,
    basename='toc',)


notes_router.register(
    r'planactionbqt',
    PlanactionbqtViewSet,
    basename='planactionbqt',)


notes_router.register(
    r'bqt',
    BqtViewSet,
    basename='bqt',)


notes_router.register(
    r'periode',
    PeriodeViewSet,
    basename='periode',)


notes_router.register(
    r'mois',
    MoisViewSet,
    basename='mois',)


notes_router.register(
    r'priorite',
    PrioriteViewSet,
    basename='priorite',)


notes_router.register(
    r'statusbqt',
    StatusbqtViewSet,
    basename='statusbqt',)

notes_router.register(
    r'typrobleme',
    TyproblemeViewSet,
    basename='typrobleme',)


notes_router.register(
    r'platform',
    PlatformViewSet,
    basename='platform',)


notes_router.register(
    r'service',
    ServiceViewSet,
    basename='service',)


notes_router.register(
    r'pays',
    PaysViewSet,
    basename='pays',)


notes_router.register(
    r'statusrapport',
    StatusrapportViewSet,
    basename='statusrapport',)


notes_router.register(
    r'status',
    StatusViewSet,
    basename='status',)


notes_router.register(
    r'critere',
    CritereViewSet,
    basename='critere',)

notes_router.register(
    r'userConnect',
    UserConnectViewSet,
    basename='userConnect',)

notes_router.register(
    r'declenchement',
    DeclenchementViewSet,
    basename='declenchement',)



urlpatterns=[
    #re_path(r'^rai/$',views.raiApi),
    #re_path(r'^rai/([0-9]+)$',views.raiApi),
    #re_path(r'^role/$',views.roleApi),
    #re_path(r'^role/([0-9]+)$',views.roleApi)
    # API
    path('api/', include(notes_router.urls)),

]