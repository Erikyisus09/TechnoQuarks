import React from 'react';

const RecuperarContraseña = () => {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Recuperar Contraseña</title>
                <style>
                    {`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                    }
                    .container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .forgot-password-container {
                        background-color: #fff;
                        border-radius: 10px;
                        padding: 40px;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                        width: 320px;
                        max-width: 90%;
                    }
                    .forgot-password-container h1 {
                        text-align: center;
                        margin-bottom: 20px;
                        color: #333;
                    }
                    .forgot-password-container p {
                        margin-bottom: 20px;
                        color: #666;
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
                    <div className="forgot-password-container">
                        <form id="forgotPasswordForm">
                            <h1>¿Olvidaste tu Contraseña?</h1>
                            <p>Ingresa tu correo electrónico y te enviaremos instrucciones para recuperar tu contraseña.</p>
                            <div className="input-group">
                                <input type="email" id="email" placeholder="Correo Electrónico" required />
                            </div>
                            <button type="submit" className="btn">Enviar</button>
                        </form>
                        <div className="extra-links">
                            <p>¿Recuerdas tu contraseña? <a href="inicio_ses">Inicia sesión aquí</a></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RecuperarContraseña;
