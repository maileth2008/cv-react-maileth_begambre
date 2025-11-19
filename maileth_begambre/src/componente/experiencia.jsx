import React from 'react';

function Experiencia() {
  const experiencias = [
    {
      cargo: "Frontend Junior - Proyecto Personal",
      empresa: "Independiente",
      año: "2025",
      descripcion: "Desarrollo de interfaces funcionales con React y Vite.",
    },
    {
      cargo: "Soporte Técnico",
      empresa: "SENA",
      año: "2024",
      descripcion: "Atención a usuarios y mantenimiento básico de equipos.",
    },
    {
      cargo: "Proyecto con Python",
      empresa: "Independiente",
      año: "2025",
      descripcion: "Programas para resolver problemas matemáticos.",
    },
    {
      cargo: "Diseñador Web Freelance",
      empresa: "Freelance",
      año: "2025",
      descripcion: "Creación de sitios web con HTML y CSS.",
    },
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo}</h3>
          <p>{exp.empresa} - {exp.año}</p>
          <p>{exp.descripcion}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
