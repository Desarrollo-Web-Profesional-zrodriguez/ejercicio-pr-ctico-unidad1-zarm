// Challenge 5: Renderizado Condicional - LogoutButton Component

function LogoutButton() {
  return <button style={buttonStyle}>Cerrar Sesión</button>;
}

const buttonStyle = {
  padding: "15px 30px",
  fontSize: "18px",
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default LogoutButton;
