import { useState } from 'react'
import { deleteStudent } from '../services/api'
import './StudentList.css'

function StudentList({ students, onEdit, onRefresh }) {
  const [deletingId, setDeletingId] = useState(null)

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setDeletingId(id)
      try {
        await deleteStudent(id)
        onRefresh()
      } catch (error) {
        console.error('Error deleting student:', error)
        alert('Failed to delete student')
      } finally {
        setDeletingId(null)
      }
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  return (
    <div className="student-list">
      <h2>Students ({students.length})</h2>
      {students.length === 0 ? (
        <p className="no-data">No students found. Add your first student!</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Date of Birth</th>
              <th>Enrollment Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.first_name} {student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
                <td>{formatDate(student.date_of_birth)}</td>
                <td>{formatDate(student.enrollment_date)}</td>
                <td>
                  <span className={`status ${student.is_active ? 'active' : 'inactive'}`}>
                    {student.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="actions">
                  <button 
                    onClick={() => onEdit(student)} 
                    className="btn btn-edit"
                    disabled={deletingId === student.id}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(student.id)} 
                    className="btn btn-delete"
                    disabled={deletingId === student.id}
                  >
                    {deletingId === student.id ? 'Deleting...' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentList
