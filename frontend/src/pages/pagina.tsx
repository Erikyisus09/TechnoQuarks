import Head from 'next/head';
import Link from 'next/link';


export default function Inicio() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inicio</title>
        <style>{`
          /* Estilos generales */
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
          }

          header {
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          header h1 {
              margin: 0;
              font-size: 24px;
              color: #333;
          }

          nav ul {
              list-style: none;
              padding: 0;
          }

          nav ul li {
              display: inline;
              margin-right: 20px;
          }

          nav ul li a {
              text-decoration: none;
              color: #333;
          }

          main {
              padding: 20px;
          }

          /* Estilos para el área de héroe */
          .hero {
              background-image: url('https://th.bing.com/th/id/R.349340a33561e5574eec718c045bcedb?rik=tQutjb1z5sS3TA&pid=ImgRaw&r=0||||||||||||||||||||||||||||||||||||||||');
              background-size: cover;
              background-position: center;
              color: #fff;
              text-align: center;
              padding: 100px 20px;
          }

          .hero h2 {
              font-size: 36px;
              margin-bottom: 20px;
          }

          .hero p {
              font-size: 18px;
              margin-bottom: 30px;
          }

          .btn {
              display: inline-block;
              padding: 10px 20px;
              background-color: #15ff00;
              color: #000000;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
          }

          .btn:hover {
              background-color: #04ad1e;
          }

          footer {
              background-color: #f8f9fa;
              text-align: center;
              padding: 20px;
              margin-top: 20px;
              box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </Head>

      <header>
        <h1>SmartFarm</h1>
        <nav>
          <ul>
            <li><a href="./inicio_ses" className="btn btn-primary">Iniciar Sesión</a></li>
            <li><a href="./registrar">Registrarse</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>ASESORAMIENTO AGRICOLA</h2>
          <p>TE BRINDAREMOS INFORMACION Y AYUDA PARA TU CULTIVOS.</p>
          <a href="./inicio_ses" className="btn btn-primary" style={{ textDecoration: 'none', padding: '5px' }}>COMENCEMOS!</a>
        </section>
        {/* Otras secciones pueden ir aquí */}
      </main>

      <footer>
        <p>&copy;Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
