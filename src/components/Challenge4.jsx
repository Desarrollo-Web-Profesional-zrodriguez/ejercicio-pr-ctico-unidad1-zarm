// Challenge 4: Lifting State Up (Levantar el Estado)
// Componente padre que mantiene el estado compartido

import { useState } from "react";
import CounterButton from "./CounterButton";

function Challenge4() {
  // 1. El estado count se mueve al componente padre común
  const [count, setCount] = useState(0);

  // 2. Función para actualizar el estado
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Desafío 4: Lifting State Up</h2>
      <p style={descriptionStyle}>
        Al presionar cualquiera de los botones, ambos contadores se incrementan
        al mismo tiempo
      </p>

      <div style={counterDisplayStyle}>
        <h3>Contador compartido: {count}</h3>
      </div>

      <div style={buttonsContainerStyle}>
        {/* 3. Pasamos el estado y la función a cada hijo vía props */}
        <CounterButton
          count={count}
          onIncrement={handleIncrement}
          label="Botón 1"
        />
        <CounterButton
          count={count}
          onIncrement={handleIncrement}
          label="Botón 2"
        />
      </div>
    </div>
  );
}

/** Styles */

const containerStyle = {
  padding: "30px",
  maxWidth: "800px",
  margin: "0 auto",
  backgroundColor: "#f8f9fa",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  color: "#333",
  textAlign: "center",
  marginBottom: "10px",
};

const descriptionStyle = {
  textAlign: "center",
  color: "#666",
  marginBottom: "30px",
  fontSize: "16px",
};

const counterDisplayStyle = {
  textAlign: "center",
  backgroundColor: "#28a745",
  color: "white",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "30px",
  fontSize: "24px",
};

const buttonsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginBottom: "30px",
};


export default Challenge4;
