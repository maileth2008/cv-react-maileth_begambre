function EducacionCV({ cursos = [] }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {cursos.map(({ titulo, institucion, año }, index) => (
          <li key={index}>
            <strong>{titulo}</strong> — {institucion} ({año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EducacionCV;


