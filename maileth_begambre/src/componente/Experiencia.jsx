import React from 'react';

function ExperienciaCV({ Experiencias = [] }) {
  return (
    <section>
      <h3>Experiencia</h3>
      <ul>
        {Experiencias.map((item, index) => (
          <li key={index}>
            <strong>{item.cargo}</strong> — {item.empresa} ({item.año})
            <p>{item.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExperienciaCV;
