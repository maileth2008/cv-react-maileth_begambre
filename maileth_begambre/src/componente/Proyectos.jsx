export default function Proyectos({ proyectos }) {
  return (
    <section className="proyectos-section">
      <h3>Proyectos</h3>

      <div className="lista-proyectos">
        {proyectos.map((proyecto, index) => (
          <article key={index} className="proyecto-card">
            <h4>{proyecto.nombre} <span>({proyecto.año})</span></h4>
            <p>{proyecto.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

