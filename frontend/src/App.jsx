import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

export default function App() {
  const [students, setStudents] = useState([]);

  // Cargar lista inicial
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8000/students/");
      setStudents(res.data);
    } catch (error) {
      console.error("Error al obtener estudiantes", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Agregar estudiante
  const addStudent = async (student) => {
    try {
      await axios.post("http://localhost:8000/students/", student);
      fetchStudents();
    } catch (error) {
      console.error("Error al agregar estudiante", error);
    }
  };

  // Editar nota
  const updateGrade = async (id, grade) => {
    try {
      await axios.put(`http://localhost:8000/students/${id}/`, { grade });
      fetchStudents();
    } catch (error) {
      console.error("Error al actualizar nota", error);
    }
  };

  // Eliminar estudiante
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/students/${id}/`);
      fetchStudents();
    } catch (error) {
      console.error("Error al eliminar estudiante", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">📚 Gestión de Estudiantes</h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        updateGrade={updateGrade}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}
