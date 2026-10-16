// =====================================================================
//  DATOS DE LA FIESTA  ·  este es el ÚNICO archivo que necesitas editar
// ---------------------------------------------------------------------
//  Cómo actualizar desde GitHub:
//    1. Abre este archivo (datos.js) en tu repositorio.
//    2. Toca el lápiz (Edit), cambia lo que necesites.
//    3. Botón verde "Commit changes". En 1 o 2 minutos la página cambia.
//
//  Reglas para no romper nada:
//    - Los textos van entre comillas: "así".
//    - Los números van SIN comillas: avance: 40
//    - Cada línea termina en coma.
//    - Para cerrar un ítem: pon avance: 100
// =====================================================================

window.DATOS = {

  // Cámbialo cada vez que edites: así sabes si la página ya se actualizó.
  actualizado: "15 de octubre, 2026",

  // true = muestra el aviso "Borrador con datos de ejemplo". Ponlo en false al publicar.
  borrador: false,

  fiesta: {
    anfitrion: "Juan Arturo",
    titulo: "Mi cumpleaños",
    fechaTexto: "Sábado 7 de noviembre",
    hora: "De 5:00 p. m. a 1:00 a. m.",
    fechaISO: "2026-11-07T17:00:00-05:00",   // inicio (cuenta regresiva y calendario)
    fechaFinISO: "2026-11-08T01:00:00-05:00",// fin (para el calendario)
    lugar: "Calle Matier 360, San Borja",
    notaLugar: "",
    mapa: "https://maps.app.goo.gl/pR4uX8BZLLMTHr3y5",
    dressCode: "",                            // vacío = no se muestra
    notaDressCode: "",
    mensaje: "Hay personas que hacen la vida más bonita, y tú eres una de ellas. Eres parte de mi historia y quiero celebrar contigo un año más de vida.",
    cita: {
      texto: "Un amigo fiel es un refugio seguro; el que lo encuentra, ha encontrado un tesoro.",
      referencia: "Eclo 6,14",
    },
    foto: "fotos/arturo.jpg",                 // tu foto principal (círculo debajo de la tira)
    // Fotos de la tira de película. Están en la carpeta "fotos".
    // "pie" es el texto escrito a mano debajo de cada foto (puede ir vacío ""). Puedes poner todas las que quieras: agrega o borra filas.
    fotos: [
      { archivo: "fotos/foto-01.jpg", pie: "" },
      { archivo: "fotos/foto-02.jpg", pie: "" },
      { archivo: "fotos/foto-20.jpg", pie: "" },
      { archivo: "fotos/foto-03.jpg", pie: "" },
      { archivo: "fotos/foto-19.jpg", pie: "" },
      { archivo: "fotos/foto-04.jpg", pie: "" },
      { archivo: "fotos/foto-05.jpg", pie: "" },
      { archivo: "fotos/foto-06.jpg", pie: "" },
      { archivo: "fotos/foto-07.jpg", pie: "" },
      { archivo: "fotos/foto-08.jpg", pie: "" },
      { archivo: "fotos/foto-09.jpg", pie: "" },
      { archivo: "fotos/foto-10.jpg", pie: "" },
      { archivo: "fotos/foto-11.jpg", pie: "" },
      { archivo: "fotos/foto-12.jpg", pie: "" },
      { archivo: "fotos/foto-13.jpg", pie: "" },
      { archivo: "fotos/foto-14.jpg", pie: "" },
      { archivo: "fotos/foto-15.jpg", pie: "" },
      { archivo: "fotos/foto-16.jpg", pie: "" },
      { archivo: "fotos/foto-31.jpg", pie: "" },
      { archivo: "fotos/foto-17.jpg", pie: "" },
      { archivo: "fotos/foto-18.jpg", pie: "" },
      { archivo: "fotos/foto-19.jpg", pie: "" },
      { archivo: "fotos/foto-21.jpg", pie: "" },
      { archivo: "fotos/foto-22.jpg", pie: "" },
      { archivo: "fotos/foto-23.jpg", pie: "" },
      { archivo: "fotos/foto-24.jpg", pie: "" },
      { archivo: "fotos/foto-32.jpg", pie: "" },
      { archivo: "fotos/foto-25.jpg", pie: "" },
      { archivo: "fotos/foto-26.jpg", pie: "" },
      { archivo: "fotos/foto-27.jpg", pie: "" },
      { archivo: "fotos/foto-28.jpg", pie: "" },
      { archivo: "fotos/foto-29.jpg", pie: "" },
      { archivo: "fotos/foto-30.jpg", pie: "" },
    ],
  },

  // Conexión automática con tu hoja de Google (pega aquí la URL que termina en /exec).
  // Vacío = todo funciona igual, pero los avisos llegan solo por WhatsApp.
  api: "https://script.google.com/macros/s/AKfycbx2qsXNSszXxuxhOUYJgwr0bM8lu69yZPCBdySOzYAbDdV3YTF-wK4PP0wlUTn9OsXY/exec",

  // Música: pega un enlace de Spotify (canción, álbum, playlist o artista).
  // Se abre en un panel al tocar el botón "Música". (Alternativa: archivo .mp3 en "archivo").
  musica: {
    spotify: "https://open.spotify.com/playlist/6ESX7sxFnfG94kNF4cwyZQ?si=WNFuenYhQQmexqIGUyIFjA",
    titulo: "La música de la noche",
    etiqueta: "Música",
    // Círculo que aparece al centro. Lo que va después de \n sale grande en dorado. Vacío "" = no se muestra.
    invitacion: "La vida se vive mejor cuando la celebramos\n¡bailando juntos!",
    invitacionBoton: "Toca para escuchar",
    invitacionRetraso: 1.5,                   // segundos antes de que aparezca
    archivo: "",
  },

  // Juego "Atrapa a Arturo" (botón flotante abajo a la izquierda). Bórralo entero para quitarlo.
  juego: {
    titulo: "🎯 Atrapa a Arturo",
    botonCorto: "Jugar",
    segundos: 30,
    nombre: "Arturo",
  },

  whatsapp: "51993600528",                    // código de país + número, sin espacios ni "+"

  yape: {
    qr: "",                                   // sin QR: solo botón de copiar número
    limite: "Envía tu colaboración hasta el 31 de octubre.",
    titulo: "Yape o Plin",
    texto: "Puedes enviarme tu colaboración por Yape o Plin.",
    titular: "Juan Arturo Machuca Ampuero",   // nombre que aparece al yapear
    numero: "993 600 528",                  // no se muestra: solo se copia con el botón
  },

  // Formulario de Google (se conecta en el siguiente paso; por ahora vacío)
  formulario: {
    urlEnvio: "",
    campoNombre: "",
    campoAsistencia: "",
  },

  // ----- COLABORACIÓN -----
  colaboracion: {
    titulo: "Ven a celebrar conmigo",
    texto: "Lo mejor de cumplir un año más es celebrarlo con quienes hacen mi vida especial. ¡Te espero para bailar, brindar y reírnos juntos!",
    mostrarMontos: false,
    incluye: [
      { icono: "🍸", texto: "Barra libre" },
      { icono: "🎧", texto: "DJ toda la fiesta" },
      { icono: "🍢", texto: "Piqueos y snacks" },
      { icono: "🥤", texto: "Gaseosas y agua" },
      { icono: "💃", texto: "Música y baile hasta la 1 a. m." },
    ],
    // Formulario "¿Me acompañas?"
    intro: "Para añadirte a la lista, escribe tu nombre y apellido.",
    nota: "🎁 ¿Regalos? ¡No te preocupes! El mejor regalo que me puedes dar es tu presencia en este día tan especial.\n\nPara poder celebrarlo todos juntos, te pido una pequeña colaboración que se invertirá en la barra, la música y los piqueos de la noche. ¡Te espero! 🥂",
    pregunta: "Elige tu colaboración:",
    montos: [35],                             // montos fijos (botones)
    otroMonto: true,                          // botón "Otro monto": escriben un monto mayor al de arriba
    otroTexto: "Otro monto",
    boton: "Confirmar y guardar mi lugar",
  },

  // ----- ACOMPAÑANTE (tarjeta debajo de "¿Me acompañas?" que abre una ventana) -----
  invitado: {
    titulo: "¿Vienes con alguien?",
    texto: "Puedes traer a 1 acompañante. Solo escribe su nombre y su colaboración.",
    boton: "Agregar a mi acompañante",
    botonCambiar: "Cambiar a mi acompañante",
    masTexto: "¿Quieres llevar a más personas? Escríbeme aquí",
    ventanaTitulo: "Agrega a tu acompañante",
    ventanaTexto: "Solo escribe su nombre y elige su colaboración.",
    pregunta: "Su colaboración:",
    alerta: "Solo puedes registrar a 1 acompañante.",
    alertaTexto: "Si quieres invitar a más personas, comunícate con Arturo por WhatsApp.",
    check: "Entendido, vendré con 1 acompañante",
    botonVentana: "Registrar a mi acompañante",
  },

  // ----- CARTA DE TRAGOS (se abre en una ventana) -----
  carta: {
    boton: "Ver carta de tragos",
    ceja: "Barra libre toda la noche",
    titulo: "Carta de la barra",
    tragos: [
      { icono: "🍋", nombre: "Pisco sour" },
      { icono: "🍹", nombre: "Chilcano" },
      { icono: "🍍", nombre: "Piña colada" },
      { icono: "🥭", nombre: "Mojito de maracuyá" },
      { icono: "🍓", nombre: "Daiquiri de fresa" },
      { icono: "💙", nombre: "Laguna azul" },
    ],
    nota: "Y además: piqueos, snacks, gaseosas y agua toda la noche.",
  },

  // ----- CIERRE FESTIVO -----
  cierre: {
    ceja: "Sábado 7 de noviembre · 5:00 p. m.",
    titulo: "¡Nos vemos en la pista!",
    texto: "Trae tus mejores pasos, tu sonrisa y muchas ganas de celebrar. ¡Esta noche la hacemos inolvidable juntos!",
    pista: "👇 Haz clic aquí",
    boton: "🎉 ¡Que empiece la fiesta!",
    // Ventana sorpresa al tocar el botón (con confeti y emojis bailando). \n = salto de línea.
    sorpresa: {
      titulo: "¡Te espero\nen la fiesta!",
      texto: "Sábado 7 de noviembre\n5:00 p. m.",
      boton: "¡Ahí estaré! 🥂",
    },
  },

};
