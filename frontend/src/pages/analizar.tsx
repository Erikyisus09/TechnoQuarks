import React from 'react';

const Analizar = () => {
  const analizarContenedores = () => {
    const progressBar = document.getElementById("progressBar");
    progressBar.style.backgroundColor = "green";
    progressBar.style.width = "100%";

    setTimeout(() => {
      const N = parseFloat(document.getElementById("contenedor2").value);
      const P = parseFloat(document.getElementById("contenedor3").value);
      const K = parseFloat(document.getElementById("contenedor4").value);
      const Hum = parseFloat(document.getElementById("contenedor5").value);

      document.getElementById("mensajeContenedor2").innerText = N >= 0.1 && N <= 0.5 ? "Tus niveles de N son óptimos" : "Nivel de N no óptimos";
      document.getElementById("mensajeContenedor3").innerText = P >= 20 && P <= 50 ? "Tus niveles de P son óptimos" : "Nivel de P no óptimos";
      document.getElementById("mensajeContenedor4").innerText = K >= 100 && K <= 200 ? "Tus niveles de K son óptimos" : "Nivel de K no óptimos";
      document.getElementById("mensajeContenedor5").innerText = Hum >= 50 && Hum <= 75 ? "Tus niveles de Humedad son óptimos" : "Nivel de Humedad no óptimos";
    }, 5000);

    setTimeout(() => {
      progressBar.style.display = "none";
    }, 5000);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PC Cleaner</title>
        <style>
          {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          
          h1 {
            margin-bottom: 20px;
            color: #333;
          }
          
          .cleaner-box {
            background-color: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            transition: transform 0.3s ease-in-out;
          }
          
          .cleaner-box:hover {
            transform: translateY(-5px);
          }
          
          button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          
          button:hover {
            background-color: #2980b9;
          }
          
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .hidden {
            display: none;
          }
          
          #resultsSection {
            margin-top: 20px;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          
          #resultsSection.show {
            opacity: 1;
          }
          
          #resultsContent {
            animation: slideUp 1s ease forwards;
            opacity: 0;
          }
          
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          #resultsContent p {
            margin-bottom: 5px;
          }
          
          #resultsContent span {
            font-weight: bold;
          }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1><img src="https://agrirouter.com/fileadmin/user_upload/news/Winterkurs_fuer_Berufstaetige_Smart_Farming_und_IoT_in_Agriculture.jpg" alt="" width="500" height="300" /></h1>
          <div className="cleaner-box">
            <h2>Análisis</h2>
            <div>
              <label htmlFor="contenedor2">Ingrese niveles de N:</label>
              <input type="number" step="0.01" id="contenedor2" placeholder="Ingrese el N" />
              <p id="mensajeContenedor2"></p>
            </div>
            <div>
              <label htmlFor="contenedor3">Ingrese niveles de P:</label>
              <input type="number" step="0.01" id="contenedor3" placeholder="Ingrese el P" />
              <p id="mensajeContenedor3"></p>
            </div>
            <div>
              <label htmlFor="contenedor4">Ingrese niveles de K:</label>
              <input type="number" step="0.01" id="contenedor4" placeholder="Ingrese el K" />
              <p id="mensajeContenedor4"></p>
            </div>
            <div>
              <label htmlFor="contenedor5">Ingrese niveles de Humedad:</label>
              <input type="number" step="0.01" id="contenedor5" placeholder="Ingrese la humedad" />
              <p id="mensajeContenedor5"></p>
            </div>
            <button onClick={analizarContenedores}>Analizar</button>
            <div id="progressBar"></div>
          </div>
        </div>
        <script src="./js/analizar.js"></script>
      </body>
    </html>
  );
};

export default Analizar;
