const Nosotros = () => {
    return (
        <section className="container mt-4">

            <h3 className="text-primary">Sobre Nosotros</h3>
            <p className="lead">Somos una empresa dedicada a enseñar React de forma práctica.</p>

            <div className="row g-4">

            <h2 className="text-primary mb-4">Temas de Vite</h2>

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Vite</h5>
                            <p className="card-text">
                                Es un empaquetador y servidor de desarrollo rápido para proyectos web,
                                creado para mejorar el rendimiento frente a Webpack.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Características</h5>
                            <ul className="mb-0">
                                <li>Recarga rápida (HMR)</li>
                                <li>Soporte para ES Modules</li>
                                <li>Optimización automática</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Ventajas</h5>
                            <ul>
                                <li>Arranque casi instantáneo</li>
                                <li>Menor consumo de recursos</li>
                                <li>Compatible con múltiples frameworks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Nosotros;