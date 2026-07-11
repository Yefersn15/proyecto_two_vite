const Footer = () => {
    return (
        <footer className="bg-primary text-center text-white p-3 mt-4">
            <p className="m-0">Todos los derechos reservados</p>
            <p className="m-0">{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;