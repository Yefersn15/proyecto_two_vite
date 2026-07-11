import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white bg-primary">
            <div className="container-fluid">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/Nosotros">Nosotros</Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu;