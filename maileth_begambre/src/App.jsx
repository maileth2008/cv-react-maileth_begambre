import React from "react";
import CabeceraCV from "./componente/CabeceraCV.jsx";
import Perfil from "./componente/Perfil.jsx";
import Educacion from "./componente/Educacion.jsx";
import Experiencia from "./componente/Experiencia.jsx";
import StackTecnologias from "./componente/StackTecnologias.jsx";

export default function App() {

  // DATOS DEL CV 
  const datosPersonales = {
    nombre: "Maileth Begambre",
    cargo: "Desarrollador en formación",
    ciudad: "Medellin, Colombia",
    contacto: "mailethbegambre615@gmail.com"
  };

  const perfilTexto = `
    Soy aprendiz del SENA con interés en el desarrollo web moderno utilizando React.
    Responsable, creativo y con habilidades de trabajo en equipo.
  `;

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

  const cursos = [
    { titulo: "Tecnólogo ADS", institucion: "SENA", año: "En curso" },
    { titulo: "Bachiller Técnico", institucion: "IETAC", año: "2024" },
    {titulo: "Fundamentos de Programación", institucion: "SENA",año: "2025"},
    {titulo: "Inglés Básico", institucion: "SENA",año: "2025" }
   
  ];

  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "JavaScript", tipo: "frontend" },
    { id: 3, nombre: "Node.js", tipo: "backend" },
    { id: 4, nombre: "MySQL", tipo: "base de datos" },
    { id: 5, nombre: "Git", tipo: "otros" },
  ];

  return (
    <div className="cv-container">
      <CabeceraCV {...datosPersonales} />

      <Perfil descripcion={perfilTexto} />

      <educacion cursos={cursos} />

      <experiencia experiencias={experiencias} />

      <StackTecnologias tecnologias={tecnologias} />
    </div>
  );
}


