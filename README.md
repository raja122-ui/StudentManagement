# Student Management System

A full-stack Student Management System built with Django (backend) and React (frontend).

## Features

- View all students in a table
- Add new students
- Edit existing student information
- Delete students
- Responsive design for mobile and desktop
- Form validation
- Active/Inactive status tracking

## Tech Stack

- **Backend**: Django 4.x with Django REST Framework
- **Frontend**: React 18 with Vite
- **Database**: SQLite3 (default Django database)
- **HTTP Client**: Axios

## Project Structure

```
├── backend/                 # Django backend
│   ├── backend/            # Django project settings
│   ├── students/           # Students app
│   │   ├── models.py       # Student model
│   │   ├── views.py        # API views
│   │   ├── serializers.py  # DRF serializers
│   │   └── urls.py         # URL routing
│   ├── manage.py           # Django management script
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # React frontend
    ├── src/
    │   ├── components/     # React components
    │   ├── services/       # API service
    │   └── styles/         # CSS files
    ├── index.html
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser (optional, for admin panel):
   ```bash
   python manage.py createsuperuser
   ```

6. Start the Django server:
   ```bash
   python manage.py runserver
   ```

The backend will be available at: http://localhost:8000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at: http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/students/ | List all students |
| POST | /api/students/ | Create a new student |
| GET | /api/students/{id}/ | Get a specific student |
| PUT | /api/students/{id}/ | Update a student |
| DELETE | /api/students/{id}/ | Delete a student |

## Student Model Fields

- `first_name` (string, required)
- `last_name` (string, required)
- `email` (email, required, unique)
- `phone` (string, required)
- `address` (text)
- `date_of_birth` (date, required)
- `enrollment_date` (date, auto-generated)
- `course` (string, required)
- `is_active` (boolean, default: true)

## Admin Panel

Access the Django admin panel at: http://localhost:8000/admin

## Usage

1. Start the backend server on port 8000
2. Start the frontend server on port 3000
3. Open http://localhost:3000 in your browser
4. Use the interface to:
   - Click "Add New Student" to create a new student
   - Click "Edit" to modify existing student information
   - Click "Delete" to remove a student
   - View all students in the table

## Development Notes

- CORS is configured to allow all origins for development
- The frontend proxies API requests to the backend during development
- SQLite database is used for easy setup and development
