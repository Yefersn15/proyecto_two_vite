const Inicio = () => {
    return (
        <section className="container mt-4">
            <h2 className="text-primary mb-4">Temas de React y Vite</h2>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Componentes React</h5>
                            <p className="card-text">
                                Son piezas reutilizables de código que representan partes de la interfaz.
                                Pueden ser de función o de clase, y reciben datos mediante <strong>props</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Layout</h5>
                            <p className="card-text">
                                Es la estructura base de una página o aplicación.  
                                Suele incluir encabezado, menú, contenido y pie de página.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">JSX</h5>
                            <p className="card-text">
                                Es una extensión de JavaScript que permite escribir código similar a HTML
                                dentro de React. Facilita crear interfaces declarativas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">JS vs JSX</h5>
                            <p className="card-text">
                                <strong>JS</strong>: Lenguaje de programación.  
                                <strong>JSX</strong>: Sintaxis que mezcla JS y HTML, usada en React para crear interfaces.
                            </p>
                        </div>
                    </div>
                </div>

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
                            <ul className="mb-0">
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

export default Inicio;