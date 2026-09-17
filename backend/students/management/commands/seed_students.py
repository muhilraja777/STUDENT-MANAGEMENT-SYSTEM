from django.core.management.base import BaseCommand

from students.models import Student


SAMPLE_STUDENTS = [
    {
        "name": "Ananya Sharma",
        "email": "ananya.sharma@campus.edu",
        "phone": "+91 98765 43210",
        "department": "Computer Science",
        "year": 3,
        "cgpa": "8.7",
    },
    {
        "name": "Rohan Mehta",
        "email": "rohan.mehta@campus.edu",
        "phone": "+91 91234 56780",
        "department": "Electronics",
        "year": 2,
        "cgpa": "8.1",
    },
    {
        "name": "Ishita Nair",
        "email": "ishita.nair@campus.edu",
        "phone": "+91 99887 76655",
        "department": "Information Technology",
        "year": 4,
        "cgpa": "9.2",
    },
]


class Command(BaseCommand):
    help = "Seed a small set of sample student records when the database is empty."

    def handle(self, *args, **options):
        if Student.objects.exists():
            self.stdout.write("Student records already exist; nothing to seed.")
            return

        Student.objects.bulk_create([Student(**student) for student in SAMPLE_STUDENTS])
        self.stdout.write(self.style.SUCCESS("Seeded 3 sample student records."))