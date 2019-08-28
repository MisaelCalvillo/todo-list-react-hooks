import React, { useState } from 'react';

function Contador() {
  // Declara una nueva variable con el nombre de "contador"
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Hiciste click {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
       	Presioname
      </button>
    </div>
  );
}

export default Contador;