import FormLogin from "./components/FormLogin";
import ContainerIllus from "./components/ContainerIllus";
import "./components/styles/app.css";

function App() {
  return (
    <>
      <div className="containerMain">
        <div className="cotainerIllus">
          <ContainerIllus />
        </div>

          <div className="containerForm">
            <FormLogin />
          </div>
      </div>
    </>
  );
}

export default App;
