import React from 'react';
function CabeceraCV({ nombre, cargo, ciudad, contacto }) { 
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>{ciudad}</p>
      <p>Contacto: {contacto}</p>
      <hr />
    </header>
  );
}

