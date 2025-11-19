import React from "react";
import CabeceraCV from "./componente/CabeceraCV.jsx";
import Perfil from "./componente/Perfil.jsx";
import Educacion from "./componente/educacion.jsx";
import Experiencia from "./componente/experiencia.jsx";
import StackTecnologias from "./componente/StackTecnologias.jsx";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
      <StackTecnologias />
    </div>
  );
}

export default App;

