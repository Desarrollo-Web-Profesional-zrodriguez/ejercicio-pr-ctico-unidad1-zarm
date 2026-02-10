import "./App.css";
import Challenge4 from "./components/Challenge4";

function App() {
  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1>React Challenge 4 - Unidad 1</h1>
        <p>Lifting State Up (Levantar el Estado)</p>
      </header>

      <main>
        <Challenge4 />
      </main>

      <footer style={footerStyle}>
        <p>By: Zahir Andrés Rodríguez Mora - 2026</p>
      </footer>
    </div>
  );
}

const appContainerStyle = {
  minHeight: "100vh",
  backgroundColor: "#e9ecef",
  padding: "20px",
};

const headerStyle = {
  textAlign: "center",
  backgroundColor: "#343a40",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "30px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const footerStyle = {
  textAlign: "center",
  marginTop: "40px",
  padding: "20px",
  backgroundColor: "#552ba9ff",
  color: "white",
  borderRadius: "12px",
  fontSize: "18px",
  fontWeight: "bold",
};

export default App;
