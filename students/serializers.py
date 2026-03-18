from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 
                  'address', 'date_of_birth', 'enrollment_date', 'course', 'is_active']
        read_only_fields = ['enrollment_date']
