import React from 'react';

function EducacionCV({ educacion }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map(({ id, titulo, institucion, año }) => (
          <li key={id}>
            <strong>{titulo}</strong> — {institucion} ({año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EducacionCV;


