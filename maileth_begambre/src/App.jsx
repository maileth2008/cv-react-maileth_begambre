import CabeceraCV from "./componente/CabeceraCV";
import Perfil from "./componente/Perfil";
import Experiencia from "./componente/experiencia";
import Educacion from "./componente/educacion";
import "./App.css";

function App() {
  return (
    <div className="cv-container">
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;

