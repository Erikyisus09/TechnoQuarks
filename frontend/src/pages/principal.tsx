// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página principal</title>
        <link rel="stylesheet" href="/css/principales.css" />
      </Head>

      <nav className="navbar">
        <div className="container">
          <div className="content">
            <button className="open-btn">&#9776; Menú</button>
          </div>

          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Ayuda</a></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Configuración</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="sidebar">
        <button className="close-btn">&times;</button>
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
        <a href="#">Tips</a>
        <a href="#">Idioma</a>
      </div>

      <header className="hero">
        <div className="hero-content">
        
          <h1>Descubre la mejor manera de mantenerte al tanto de tus tierras</h1>
          <p>Presiona el botón de "Analizar" para obtener un resultado de tus tierras.</p>
          <a href="./analizar" className="btn">Analizar</a>
        </div>
      </header>

      <section className="featured-listings">
        <h2>Sugerencias</h2>
        <div className="row">
            <div className="col">
                <div className="card">
                    <img src="https://th.bing.com/th/id/OIP.bHLh02_0r9B-ZD77Q0mbnAAAAA?pid=ImgDet&w=474&h=270&rs=1"
                        className="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title">Lechuga</h5>
                        <p className="card-text">
                            <strong>Suelo:</strong> Prefieren pH entre 6.0 y 7.0, bien drenado y rico en materia
                            orgánica.<br />
                            <strong>Siembra:</strong> Directamente en suelo o macetas en primavera u otoño, evitando
                            temperaturas extremas.<br />
                            <strong>Nutrientes:</strong> Proporciones sugeridas en suelo: N (100-150 kg/ha), P (50-80
                            kg/ha), K (50-100 kg/ha).<br />
                            <strong>Riego:</strong> Regular para mantener húmedo pero no saturado. Evitar encharcamiento
                            para prevenir enfermedades.<br />
                            <strong>Cuidado:</strong> Controlar malezas y plagas como pulgones y babosas. Mantener suelo
                            bien drenado y sombrear en climas calurosos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://http2.mlstatic.com/S_649511-MLM20589750749_022016-O.jpg" className="card-img-top"
                        alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title">Maiz</h5>
                        <p className="card-text">
                            <strong>Suelo:</strong> Prefiere pH entre 6.0 y 7.0. Necesita nitrógeno, fósforo y potasio en
                            proporciones adecuadas.<br />
                            <strong>Siembra:</strong> Temperatura mínima del suelo de 10°C. Ajusta la distancia entre
                            semillas según el tipo de maíz.<br />
                            <strong>Nutrientes:</strong> Recomendado en suelo: Nitrógeno (N) 100-150 kg/ha, Fósforo (P)
                            50-80 kg/ha, Potasio (K) 50-100 kg/ha.<br />
                            <strong>Riego:</strong> Mantén el suelo húmedo pero no saturado, especialmente durante
                            floración y formación de grano.<br />
                            <strong>Cuidado:</strong> Controla malezas, plagas y enfermedades. Fertiliza según necesidad
                            para mantener niveles de nutrientes adecuados.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://th.bing.com/th/id/R.4504d7770b4ed581421f0b2cf0a5c498?rik=%2bo60MJo9JCHeXg&riu=http%3a%2f%2fcdn.webshopapp.com%2fshops%2f33643%2ffiles%2f165779462%2ftomaat-trixi.jpg&ehk=Wr3xvLePCj1H7khFA6Ex5tpN3BA4ZMOmShMbCAhdhd8%3d&risl=&pid=ImgRaw&r=0" width="350" height="250"
                        className="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title">Jitomate</h5>
                        <p className="card-text">
                            <strong>Suelo:</strong> Prefieren suelos bien drenados y ligeramente ácidos (pH 6.0-6.8),
                            sueltos
                            y ricos en materia orgánica.<br />
                            <strong>Siembra:</strong> Desde semillas o plantas jóvenes en primavera, con temperaturas
                            cálidas
                            y sin riesgo de heladas.<br />
                            <strong>Nutrientes:</strong> Recomendado en suelo: N (100-150 kg/ha), P (50-80 kg/ha), K
                            (50-100
                            kg/ha).<br />
                            <strong>Riego:</strong> Necesitan riego regular y uniforme para mantener el suelo húmedo,
                            evitando el estrés hídrico y el encharcamiento.<br />
                            <strong>Cuidado:</strong> Controlar malezas y plagas como áfidos y gusanos. Vigilar
                            enfermedades
                            fúngicas como mildiu y tizón tardío y aplicar medidas preventivas si es necesario.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </section>

      <script src="/js/script_princi.js"></script>

      <style jsx>{`
        /* Estilos generales */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
          }
          
          .logo {
            color: #333;
            font-size: 24px;
          }
          
          .navbar {
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .nav-links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }
          
          .nav-links li {
            margin-right: 20px;
          }
          
          .nav-links li a {
            text-decoration: none;
            color: #333;
            font-size: 16px;
          }
          
          /* Estilos para el menú desplegable */
          .menu-toggle {
            cursor: pointer;
            display: none;
          }
          
          .hamburger {
            width: 30px;
            height: 3px;
            background-color: #333;
            margin: 5px 0;
          }
          
          .hero {
            background-image: url('https://s1.1zoom.me/b5050/962/419887-Kycb_3840x2400.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 100px 0;
          }
          
          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }
          
          .hero h1 {
            font-size: 36px;
            margin-bottom: 20px;
          }
          
          .hero p {
            font-size: 20px;
            margin-bottom: 40px;
          }
          
          .btn {
            background-color: #ff5a5f;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
          }
          
          .btn:hover {
            background-color: #ff3338;
          }
          
          .featured-listings {
            text-align: center;
            padding: 50px 0;
          }
          
          .listings-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          
          .listing {
            width: 300px;
            margin-bottom: 40px;
          }
          
          .listing img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 10px;
          }
          
          .listing h3 {
            font-size: 24px;
            margin-bottom: 10px;
          }
          
          .listing p {
            font-size: 16px;
            margin-bottom: 10px;
          }
          
          .price {
            font-size: 18px;
            color: #333;
          }
          
          /* Media query para pantallas pequeñas */
          @media screen and (max-width: 768px) {
            .nav-links {
              display: none;
              flex-direction: column;
              align-items: flex-start;
              position: absolute;
              top: 60px;
              left: 0;
              background-color: #fff;
              width: 100%;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
          
            .nav-links.active {
              display: flex
            }
        }  
        
        /* Estilos para el menú desplegable */
        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: none;
          }
          
          .dropdown-menu ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .dropdown-menu ul li {
            padding: 10px 20px;
          }
          
          .dropdown-menu ul li a {
            text-decoration: none;
            color: #333;
            font-size: 16px;
          }
          
          /* Estilos para el menú desplegable - visible */
          .dropdown-menu.active {
            display: block;
          }
          
          .menu-toggle {
            cursor: pointer;
            display: none;
          }
          
          .hamburger {
            width: 30px;
            height: 3px;
            background-color: #333;
            margin: 5px 0;
          }
        
          body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          
          .sidebar {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #111;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
          }
          
          .sidebar a {
            padding: 10px 15px;
            text-decoration: none;
            font-size: 20px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
          
          .sidebar a:hover {
            color: #f1f1f1;
          }
          
          .sidebar .close-btn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
          }
          
          .content {
            transition: margin-left .5s;
            padding: 16px;
          }
          
          .open-btn {
            font-size: 30px;
            cursor: pointer;
            background-color: transparent;
            border: none;
            color: #111;
          }
          
          .open-btn:hover {
            color: #555;
          }
        
          /* cartas */
          .card {
            border: none;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            background-color: #fff;
            overflow: hidden;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          
          .card-img-top {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            height: 250px; /* Ajustar según el tamaño deseado */
            object-fit: cover;
          }
          
          .card-body {
            padding: 20px;
          }
          
          .card-title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }
          
          .card-text {
            color: #666;
            font-size: 1rem;
            line-height: 1.5;
          }
          
          .row {
            display: flex;
            flex-wrap: nowrap; /* Evita que las tarjetas se envuelvan a la siguiente línea */
            justify-content: center; /* Alinea las tarjetas horizontalmente en el centro */
          }
          
          .col {
            flex: 0 0 auto;
          
            width: 30%; /* Opcional: ajusta el ancho de las columnas según sea necesario */
            margin-bottom: 20px; /* Espacio entre las cartas */
          }
          
          @media (max-width: 768px) {
            .row {
              margin-left: 0;
              margin-right: 0;
            }
          }
          
      `}</style>
    </div>
  );
}
