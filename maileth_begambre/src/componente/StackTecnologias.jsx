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

  //  NUEVO: función para eliminar
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
            style={{ color: obtenerColor(tech.tipo), fontWeight: "bold" }}
          >
            {tech.nombre} — <em>{tech.tipo}</em>

            {/* NUEVO: botón eliminar */}
            <button
              onClick={() => eliminarTecnologia(tech.id)}
              style={{
                marginLeft: "10px",
                padding: "2px 6px",
                cursor: "pointer",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px"
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
