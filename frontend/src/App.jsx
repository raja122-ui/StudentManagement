import { useState, useEffect } from 'react'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import { getStudents } from './services/api'
import './styles/App.css'

function App() {
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const data = await getStudents()
      setStudents(data)
    } catch (error) {
      console.error('Error fetching students:', error)
    }
  }

  const handleAddStudent = () => {
    setSelectedStudent(null)
    setShowForm(true)
  }

  const handleEditStudent = (student) => {
    setSelectedStudent(student)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setSelectedStudent(null)
  }

  const handleFormSuccess = () => {
    fetchStudents()
    handleFormClose()
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Management System</h1>
      </header>
      
      <main className="app-main">
        {!showForm ? (
          <>
            <div className="header-actions">
              <button onClick={handleAddStudent} className="btn btn-primary">
                Add New Student
              </button>
            </div>
            <StudentList 
              students={students} 
              onEdit={handleEditStudent}
              onRefresh={fetchStudents}
            />
          </>
        ) : (
          <StudentForm 
            student={selectedStudent}
            onSuccess={handleFormSuccess}
            onCancel={handleFormClose}
          />
        )}
      </main>
    </div>
  )
}

export default App
