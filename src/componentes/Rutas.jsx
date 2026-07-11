import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Nosotros from "../pages/Nosotros";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Nosotros" element={<Nosotros/>} />
        </Routes>
    )
}

export default Rutas;