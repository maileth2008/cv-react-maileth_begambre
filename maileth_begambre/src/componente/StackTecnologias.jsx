import React from "react";

export default function StackTecnologias({ tecnologias }) {

  // Renderizado condicional: si no hay tecnologías
  if (tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No hay tecnologías registradas.</p>
      </section>
    );
  }

  // Asigna color según el tipo
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      case "otros":
        return "purple";
      default:
        return "gray";
    }
  };

  return (
    <section>
      <h3>Stack de Tecnologías</h3>

      <ul>
        {tecnologias.map((tech) => (
          <li
            key={tech.id}
            style={{ color: obtenerColor(tech.tipo), fontWeight: "bold" }}
          >
            {tech.nombre} — <em>{tech.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
