import FormLogin from "../components/FormLogin";
import ContainerIllus from "../components/ContainerIllus";



const PageLogin = () => {

  return (
        <div className="containerRoot">
        <div className="containerMain">
        <div className="cotainerIllus">
            <ContainerIllus />
        </div>
        <div className="containerForm">
            <FormLogin />
        </div>
        </div>
    </div>
  )
}

export default PageLogin