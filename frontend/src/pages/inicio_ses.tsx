import React from 'react';

function LoginPage() {
    return (
        <html lang="es">
            <head>
            <style>{`
                    body {
                        margin: 3000;
                        padding: 3000;
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                        background-image: url('./imagenes/inisio.jpeg');
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .login-container {
                        background-color: rgba(255, 255, 255, 0.46); /* Color de fondo del contenedor de inicio de sesión */
                        border-radius: 10px;
                        padding: 40px;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                        width: 320px;
                        max-width: 90%;
                    }
                    .login-form h1 {
                        text-align: center;
                        margin-bottom: 30px;
                        color: #333;
                    }
                    .input-group {
                        position: relative;
                        margin-bottom: 20px;
                    }
                    .input-group input {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 16px;
                    }
                    .input-group input:focus {
                        outline: none;
                        border-color: #007bff;
                    }
                    .input-group label {
                        position: absolute;
                        top: 50%;
                        left: 10px;
                        transform: translateY(-50%);
                        color: #888;
                        pointer-events: none;
                        transition: 0.3s ease-out;
                    }
                    .input-group input:focus + label,
                    .input-group input:not(:placeholder-shown) + label {
                        top: 0;
                        font-size: 12px;
                        color: #007bff;
                    }
                    .btn {
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        padding: 10px 0;
                        width: 100%;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    .btn:hover {
                        background-color: #0056b3;
                    }
                    .extra-links {
                        margin-top: 20px;
                        text-align: center;
                    }
                    .extra-links a {
                        color: #000000;
                        text-decoration: none;
                        margin: 0 10px;
                        transition: color 0.3s ease;
                    }
                    .extra-links a:hover {
                        color: #333;
                    }
                `}</style>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Inicio de Sesión</title>
                <link rel="stylesheet" href="./css/inicio_sesion_styles.css" />
            </head>
            <body style={{margin: "3000", padding: "3000", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", backgroundImage: "url('./imagenes/inisio.jpeg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="container">
                    <div className="login-container">
                        <form id="loginForm">
                            <h1>Iniciar Sesión</h1>
                            <div className="input-group">
                                <input type="email" id="email" placeholder="Correo Electrónico" required />
                            </div>
                            <div className="input-group">
                                <input type="password" id="password" placeholder="Contraseña" required />
                            </div>
                            <a href="./principal" className="btn btn-primary center-block" style={{textDecoration: "none", padding: "10px", paddingLeft: "90px", paddingRight: "90px"}}>INICIAR SESION</a>
                        </form>
                        <div className="extra-links">
                            <a href="./rec_contra" className="link">¿Olvidaste tu contraseña?</a>
                            <a href="./registrar" className="link">Registrarse</a>
                        </div>
                    </div>
                </div>
                <script src="./js/script.js"></script>
            </body>
        </html>
    );
}

export default LoginPage;
