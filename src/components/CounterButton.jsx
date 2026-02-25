// Challenge 4: Lifting State Up - Child Component
// Este componente recibe el estado y la función de actualización vía props

function CounterButton({ count, onIncrement, label }) {
  return (
    <button onClick={onIncrement} style={buttonStyle}>
      {label} {"=>"} {count} clics
    </button>
  );
}

const buttonStyle = {
  padding: "15px 30px",
  fontSize: "18px",
  margin: "10px",
  backgroundColor: "#ff7300ff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default CounterButton;
