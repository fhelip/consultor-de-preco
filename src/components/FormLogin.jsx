import "./styles/form.css";
import "./styles/buttonStyle.css";
import { ReactComponent as IconButton } from "./assets/iconButton.svg";
import { ReactComponent as IconUser } from "./assets/inputUser.svg";
import { ReactComponent as IconPass } from "./assets/inputPass.svg";

import { useNavigate } from "react-router-dom";


const FormLogin = () => {
  const nav = useNavigate()

  const goHome = () => {
    nav("/home")
  }
  return (
    <>
      <div className="form">
        <h1 className="titleForm">Faça seu login</h1>

        <form className="formFields">
          <div className="inputAndIcon">
            <input
              className="input"
              type="text"
              placeholder="Digite seu usuario"
            />
            <IconUser className="icon" />
          </div>
          <div className="inputAndIcon">
            <input
              className="input"
              type="password"
              placeholder="Digite sua senha"
            />
            <IconPass className="icon"/>
          </div>
          <button
          onClick={goHome} 
          className="btnLogin">
            LOGIN
            <IconButton className="iconButton" />
          </button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
