export default function Proyectos({ proyectos }) {
  return (
    <section className="proyectos">
      <h3>Proyectos</h3>

      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <h4>{proyecto.nombre} ({proyecto.año})</h4>
            <p>{proyecto.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
