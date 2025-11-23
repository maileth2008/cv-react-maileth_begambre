import { useState } from "react";
import Habilidades from "./Habilidades";

export default function ToggleHabilidades({ habilidades }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {visible && <Habilidades habilidades={habilidades} />}
    </div>
  );
}
