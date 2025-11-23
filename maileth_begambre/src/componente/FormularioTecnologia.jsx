import { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault(); // evita que la página se recargue

    if (!nombre || !tipo) return;

    const nueva = {
      id: Date.now(),
      nombre,
      tipo
    };

    agregarTecnologia(nueva);
    setNombre("");
    setTipo("");
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h3>Agregar Tecnología</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Seleccione tipo</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="base de datos">Base de datos</option>
        <option value="otros">Otros</option>
      </select>

      <button type="submit">Agregar</button>
    </form>
  );
}
