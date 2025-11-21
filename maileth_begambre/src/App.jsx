import React from "react";
import CabeceraCV from "./componente/CabeceraCV.jsx";
import Perfil from "./componente/Perfil.jsx";
import Educacion from "./componente/Educacion.jsx";
import Experiencia from "./componente/Experiencia.jsx";
import StackTecnologias from "./componente/StackTecnologias.jsx";

export default function App() {

  // DATOS DEL CV 
  const datosPersonales = {
    nombre: "Jesús Begambre",
    cargo: "Desarrollador en formación",
    ciudad: "Valledupar, Colombia",
    contacto: "jesus@example.com"
  };

  const perfilTexto = `
    Soy aprendiz del SENA con interés en el desarrollo web moderno utilizando React.
    Responsable, creativo y con habilidades de trabajo en equipo.
  `;

  const experiencias = [
    { cargo: "Frontend Junior", empresa: "Independiente", año: "2025", descripcion: "Desarrollo con React y Vite." },
    { cargo: "Soporte Técnico", empresa: "SENA", año: "2024", descripcion: "Atención a usuarios y mantenimiento básico." },
  ];

  const cursos = [
    { titulo: "Tecnólogo ADS", institucion: "SENA", año: "En curso" },
    { titulo: "Bachiller Técnico", institucion: "Claret", año: "2024" },
  ];

  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "JavaScript", tipo: "frontend" },
    { id: 3, nombre: "Node.js", tipo: "backend" },
    { id: 4, nombre: "MySQL", tipo: "base" },
    { id: 5, nombre: "Git", tipo: "otros" }
  ];

  return (
    <div className="cv-container">
      <CabeceraCV {...datosPersonales} />

      <Perfil descripcion={perfilTexto} />

      <Educacion cursos={cursos} />

      <Experiencia experiencias={experiencias} />

      <StackTecnologias tecnologias={tecnologias} />
    </div>
  );
}


