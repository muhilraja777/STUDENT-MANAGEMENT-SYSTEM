from rest_framework import serializers

from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        required=True,
        allow_blank=False,
        trim_whitespace=True,
        error_messages={"blank": "Name cannot be empty."},
    )
    department = serializers.CharField(
        required=True,
        allow_blank=False,
        trim_whitespace=True,
        error_messages={"blank": "Department cannot be empty."},
    )
    phone = serializers.CharField(required=True, allow_blank=False, trim_whitespace=True)

    class Meta:
        model = Student
        fields = ["id", "name", "email", "phone", "department", "year", "cgpa"]

    def validate_email(self, value):
        value = value.strip().lower()
        query = Student.objects.filter(email__iexact=value)
        if self.instance is not None:
            query = query.exclude(pk=self.instance.pk)
        if query.exists():
            raise serializers.ValidationError("A student with this email already exists.")
        return value

    def validate_phone(self, value):
        return value.strip()

    def validate_department(self, value):
        return value.strip()

    def validate_name(self, value):
        return value.strip()