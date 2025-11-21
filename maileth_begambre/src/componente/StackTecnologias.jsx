import React from "react";

export default function StackTecnologias({ tecnologias }) {
  // Renderizado condicional
  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No hay tecnologías registradas.</p>
      </section>
    );
  }

  // Función para asignar la clase según el tipo
  const obtenerClase = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "stack-item stack-frontend";
      case "backend":
        return "stack-item stack-backend";
      case "base de datos":
        return "stack-item stack-base";
      case "otros":
        return "stack-item stack-otro";
      default:
        return "stack-item";
    }
  };

  return (
    <section>
      <h3>Stack de Tecnologías</h3>

      <ul>
        {tecnologias.map((tech) => (
          <li key={tech.id} className={obtenerClase(tech.tipo)}>
            {tech.nombre} — <em>{tech.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
