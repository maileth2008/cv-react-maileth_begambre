import React from 'react';

function ExperienciaCV({ experiencia }) {
  return (
    <section>
      <h3>Experiencia</h3>
      <ul>
        {experiencia.map((item) => (
          <li key={item.id}>
            <strong>{item.rol}</strong> — {item.empresa} ({item.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExperienciaCV;
