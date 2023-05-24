const FormLogin = () => {
  return (
    <>
    
    <div className="form">
      <h1>Faça seu login</h1>

      <form className="formFields">
        <input className="input" type="text" placeholder="Digite seu usuario"/>
        <input className="input" type="text" placeholder="Digite sua senha"/>
        <button className="btnLogin">FAÇA SEU LOGIN</button>
      </form>
      
    </div>
    
    </>
  )
}

export default FormLogin