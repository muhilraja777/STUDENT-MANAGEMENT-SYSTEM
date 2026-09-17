from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import StudentViewSet, dashboard_summary, health_check


router = DefaultRouter()
router.register("students", StudentViewSet, basename="student")

urlpatterns = [
    path("healthz", health_check, name="health"),
    path("dashboard/summary/", dashboard_summary, name="dashboard-summary"),
    path("", include(router.urls)),
]