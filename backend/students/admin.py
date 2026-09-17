from django.contrib import admin

from .models import Student


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "email", "department", "year", "cgpa"]
    search_fields = ["name", "email", "department"]
    list_filter = ["department", "year"]