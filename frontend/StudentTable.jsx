import React, { useState } from "react";

export default function StudentTable({ students, updateGrade, deleteStudent }) {
  const [editId, setEditId] = useState(null);
  const [newGrade, setNewGrade] = useState("");

  return (
    <table className="w-full bg-white shadow rounded-lg overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Nombre</th>
          <th className="p-3 text-left">Correo</th>
          <th className="p-3 text-left">Nota</th>
          <th className="p-3 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="border-t">
            <td className="p-3">{student.name}</td>
            <td className="p-3">{student.email}</td>
            <td className="p-3">
              {editId === student.id ? (
                <input
                  type="number"
                  value={newGrade}
                  onChange={(e) => setNewGrade(e.target.value)}
                  className="border p-1 rounded w-20"
                />
              ) : (
                student.grade
              )}
            </td>
            <td className="p-3 flex justify-center gap-2">
              {editId === student.id ? (
                <>
                  <button
                    onClick={() => {
                      updateGrade(student.id, newGrade);
                      setEditId(null);
                      setNewGrade("");
                    }}
                    className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditId(student.id);
                      setNewGrade(student.grade);
                    }}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
