import "./components/styles/app.css";
import {Routes, Route} from 'react-router-dom'

//pages
import PageLogin from './pages/PageLogin.jsx'
import PageHome from "./pages/PageHome";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<PageLogin />} />  
      <Route path="/home" element={<PageHome/>}/>
    </Routes>
      
    </>
  );
}

export default App;
