from django.db import models
from django.db.models import Avg, Count
from django.http import JsonResponse
from rest_framework import status, viewsets
from rest_framework.response import Response

from .models import Student
from .serializers import StudentSerializer


def health_check(_request):
    return JsonResponse({"status": "ok"})


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    http_method_names = ["get", "post", "put", "patch", "delete", "head", "options"]

    def get_queryset(self):
        queryset = super().get_queryset()
        search = self.request.query_params.get("search", "").strip()
        ordering = self.request.query_params.get("ordering", "id")
        allowed_ordering = {"id", "name", "department", "year", "cgpa"}

        if search:
            queryset = queryset.filter(
                models.Q(name__icontains=search)
                | models.Q(email__icontains=search)
                | models.Q(department__icontains=search)
            )
        if ordering in allowed_ordering:
            queryset = queryset.order_by(ordering)
        return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


def dashboard_summary(_request):
    total_students = Student.objects.count()
    department_rows = list(
        Student.objects.values("department")
        .annotate(count=Count("id"))
        .order_by("-count", "department")
    )
    average = Student.objects.aggregate(average=Avg("cgpa"))["average"]
    return JsonResponse(
        {
            "totalStudents": total_students,
            "departmentCount": len(department_rows),
            "averageCgpa": round(float(average), 2) if average is not None else 0,
            "topDepartment": department_rows[0]["department"] if department_rows else None,
            "departments": [
                {"name": row["department"], "count": row["count"]}
                for row in department_rows
            ],
        }
    )