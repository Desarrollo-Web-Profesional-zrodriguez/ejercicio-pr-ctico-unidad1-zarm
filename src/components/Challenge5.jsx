// Challenge 5: Renderizado Condicional
// Mostrar contenido diferente según una condición de JavaScript

import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Challenge5() {
  // Estado para controlar si el usuario está logueado
  const [estaLogueado, setEstaLogueado] = useState(false);

  // Función para alternar el estado de login
  const toggleLogin = () => {
    setEstaLogueado(!estaLogueado);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Desafío 5: Renderizado Condicional</h2>
      <p style={descriptionStyle}>
        Mostrar contenido diferente según una condición de JavaScript
      </p>

      <div style={statusDisplayStyle}>
        <h3>
          Estado actual: {estaLogueado ? " Logueado" : " No logueado"}
        </h3>
      </div>

      <div style={buttonContainerStyle}>
        {/* Renderizado condicional usando operador ternario */}
        {estaLogueado ? <LogoutButton /> : <LoginButton />}
      </div>

      <div style={controlContainerStyle}>
        <button onClick={toggleLogin} style={toggleButtonStyle}>
           Cambiar Estado
        </button>
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
  marginBottom: "30px",
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

const statusDisplayStyle = {
  textAlign: "center",
  backgroundColor: "#17a2b8",
  color: "white",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "30px",
  fontSize: "24px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",
};

const controlContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",
};

const toggleButtonStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  backgroundColor: "#6c757d",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const codeExampleStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #17a2b8",
};

const preStyle = {
  backgroundColor: "#f4f4f4",
  padding: "15px",
  borderRadius: "5px",
  overflow: "auto",
  fontSize: "14px",
  fontFamily: "monospace",
};

export default Challenge5;
