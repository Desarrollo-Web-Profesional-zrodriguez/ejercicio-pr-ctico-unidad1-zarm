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
      
      <div style={controlContainerStyle}>
        <button onClick={toggleLogin} style={toggleButtonStyle}>
           {estaLogueado ? <LogoutButton /> : <LoginButton />}
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
  marginBottom: "30px",
  fontSize: "16px",
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


export default Challenge5;
