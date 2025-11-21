import React from 'react';
function CabeceraCV({ nombre1, nombre2, cargo, ciudad, contacto }) {
  return (
    <header>
      <h1>
        <span className="negro">{nombre1}</span>{" "}
        <span className="rosa">{nombre2}</span>
      </h1>

      <h2>{cargo}</h2>
      <p>{ciudad}</p>
      <p>Contacto: {contacto}</p>
      <hr />
    </header>
  );
}

export default CabeceraCV;
