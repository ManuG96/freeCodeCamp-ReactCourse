import "./App.css";
import Logo from "./componentes/logo.jsx";
import ListaDeTareas from "./componentes/listaDeTareas.jsx";

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
