import { useState } from "react";
import { datosIniciales } from "./cvData";

import CabeceraCV from "./componente/CabeceraCV.jsx";
import Perfil from "./componente/Perfil.jsx";
import Educacion from "./componente/Educacion.jsx";
import Experiencia from "./componente/Experiencia.jsx";
import StackTecnologias from "./componente/StackTecnologias.jsx";
import ToggleHabilidades from "./componente/ToggleHabilidades.jsx";
import FormularioTecnologia from "./componente/FormularioTecnologia.jsx";
import Proyectos from "./componente/Proyectos.jsx";


import "./index.css";

export default function App() {
  const [tecnologias, setTecnologias] = useState(datosIniciales.tecnologiasIniciales);

  const agregarTecnologia = (nueva) => {
    setTecnologias([...tecnologias, nueva]);
  };

  return (
    <div className="cv-container">
      <CabeceraCV {...datosIniciales.datosPersonales} />

      <Perfil descripcion={datosIniciales.perfilTexto} />

      <Educacion cursos={datosIniciales.cursos} />

      <Experiencia Experiencias={datosIniciales.experiencias} />

      <ToggleHabilidades habilidades={datosIniciales.habilidades} />

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <StackTecnologias tecnologias={tecnologias} />

      <Proyectos proyectos={datosIniciales.proyectos} />

    </div>
  );
}
