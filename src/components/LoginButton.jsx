// Challenge 5: Renderizado Condicional - LoginButton Component

function LoginButton() {
  return <button style={buttonStyle}> Iniciar Sesión</button>;
}

const buttonStyle = {
  padding: "15px 30px",
  fontSize: "18px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default LoginButton;
