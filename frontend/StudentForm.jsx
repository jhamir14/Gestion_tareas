import React, { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [form, setForm] = useState({ name: "", email: "", grade: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.grade) return;
    addStudent(form);
    setForm({ name: "", email: "", grade: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow mb-6 flex gap-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded w-1/4"
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded w-1/3"
      />
      <input
        type="number"
        name="grade"
        placeholder="Nota"
        value={form.grade}
        onChange={handleChange}
        className="border p-2 rounded w-1/6"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  );
}
