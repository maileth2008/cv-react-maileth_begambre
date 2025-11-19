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
    {
      cargo: "Asistente de Datos",
      empresa: "Proyecto Académico",
      año: "2025",
      descripcion: "Manejo de datos con Python y generación de reportes básicos.",
    },
    {
      cargo: "Proyecto React - Componentes Dinámicos",
      empresa: "Independiente",
      año: "2025",
      descripcion: "Construcción de componentes reutilizables y renderizados condicionales.",
    },
    {
      cargo: "Creadora de Landing Pages",
      empresa: "Freelance",
      año: "2024",
      descripcion: "Diseño y maquetación de páginas promocionales con HTML, CSS y JavaScript.",
    },
    {
      cargo: "Práctica de Gestión de Dependencias",
      empresa: "SENA",
      año: "2025",
      descripcion: "Uso de npm, instalación de librerías y modularización en proyectos.",
    },
    {
      cargo: "Proyecto API Básica",
      empresa: "Independiente",
      año: "2025",
      descripcion: "Construcción de una API simple utilizando JSON y JavaScript.",
    },
    {
      cargo: "Gestión de Repositorios GitHub",
      empresa: "SENA",
      año: "2024",
      descripcion: "Manejo de ramas, commits descriptivos y sincronización remota.",
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

