import { useState } from "react";

export default function StackTecnologias({ tecnologias, setTecnologias }) {

  if (tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No hay tecnologías registradas.</p>
      </section>
    );
  }

  const obtenerColorClase = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "color-frontend";
      case "backend":
        return "color-backend";
      case "base de datos":
        return "color-bd";
      case "otros":
        return "color-otros";
      default:
        return "color-default";
    }
  };

  const eliminarTecnologia = (id) => {
    const nuevas = tecnologias.filter((tech) => tech.id !== id);
    setTecnologias(nuevas);
  };

  return (
    <section>
      <h3>Stack de Tecnologías</h3>

      <ul>
        {tecnologias.map((tech) => (
          <li
            key={tech.id}
            className={`item-tecnologia ${obtenerColorClase(tech.tipo)}`}
          >
            {tech.nombre} — <em>{tech.tipo}</em>

            <button
              className="btn-eliminar"
              onClick={() => eliminarTecnologia(tech.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
