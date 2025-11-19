import React from 'react';

function Educacion() {

  const cursos = [
    {
      titulo: "Tecnólogo en Análisis y Desarrollo de Software",
      institucion: "SENA",
      año: "En curso"
    },
    {
      titulo: "Bachiller Técnico",
      institucion: "I.E Técnico Agropecuario Claret",
      año: "2024"
    },
    {
      titulo: "Fundamentos de Programación",
      institucion: "SENA",
      año: "2025"
    },
    {
      titulo: "Inglés Básico",
      institucion: "SENA",
      año: "2025"
    }
  ];

  return (
    <section>
      <h2>Educación</h2>

      {cursos.map((curso, index) => (
        <div key={index}>
          <p>
            <strong>{curso.titulo}</strong> — {curso.institucion} ({curso.año})
          </p>
        </div>
      ))}
    </section>
  );
}

export default Educacion;
