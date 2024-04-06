import React from 'react';

const Register = () => {
    return (
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Registrarse</title>
                <style>
                    {`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        background-image: url("./imagenes/registrar");
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
                    .register-container {
                        background-color: rgba(255, 255, 255, 0.46);
                        border-radius: 10px;
                        padding: 40px;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                        width: 320px;
                        max-width: 90%;
                    }
                    .register-container h1 {
                        text-align: center;
                        margin-bottom: 30px;
                        color: #333;
                    }
                    .input-group {
                        margin-bottom: 20px;
                    }
                    .input-group input {
                        width: 100%;
                        padding: 12px 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                    }
                    .btn {
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        padding: 12px 0;
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
                        color: #007bff;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }
                    .extra-links a:hover {
                        color: #333;
                    }
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <div className="register-container">
                        <form id="registerForm">
                            <h1>Registrarse</h1>
                            <div className="input-group">
                                <input type="text" id="username" placeholder="Nombre de Usuario" required />
                            </div>
                            <div className="input-group">
                                <input type="email" id="email" placeholder="Correo Electrónico" required />
                            </div>
                            <div className="input-group">
                                <input type="password" id="password" placeholder="Contraseña" required />
                            </div>
                            <div className="input-group">
                                <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" required />
                            </div>
                            <button className="btn">Registrarse</button>
                        </form>
                        <div className="extra-links">
                            <p>¿Ya tienes una cuenta? <a href="./inicio_ses">Inicia sesión aquí</a></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Register;
