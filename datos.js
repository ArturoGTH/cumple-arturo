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
  actualizado: "11 de octubre, 2026",

  // true = muestra el aviso "Borrador con datos de ejemplo". Ponlo en false al publicar.
  borrador: true,

  fiesta: {
    anfitrion: "Juan Arturo",
    titulo: "Mi cumpleaños",
    fechaTexto: "Sábado 7 de noviembre",
    hora: "De 6:00 p. m. a 1:00 a. m.",
    fechaISO: "2026-11-07T18:00:00-05:00",   // inicio (cuenta regresiva y calendario)
    fechaFinISO: "2026-11-08T01:00:00-05:00",// fin (para el calendario)
    lugar: "Por confirmar",
    notaLugar: "Te envío la ubicación exacta por WhatsApp apenas confirmes.",
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
      { archivo: "fotos/foto-03.jpg", pie: "" },
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
      { archivo: "fotos/foto-17.jpg", pie: "" },
      { archivo: "fotos/foto-18.jpg", pie: "" },
      { archivo: "fotos/foto-19.jpg", pie: "" },
      { archivo: "fotos/foto-20.jpg", pie: "" },
      { archivo: "fotos/foto-21.jpg", pie: "" },
      { archivo: "fotos/foto-22.jpg", pie: "" },
      { archivo: "fotos/foto-23.jpg", pie: "" },
      { archivo: "fotos/foto-24.jpg", pie: "" },
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
  api: "",

  // Música: pega un enlace de Spotify (canción, álbum, playlist o artista).
  // Se abre en un panel al tocar el botón "Música". (Alternativa: archivo .mp3 en "archivo").
  musica: {
    spotify: "https://open.spotify.com/intl-es/artist/2GTN6XbHSiew74AUQZJapn",
    titulo: "La música de la noche",
    etiqueta: "Música",
    archivo: "",
  },

  whatsapp: "51993600528",                    // código de país + número, sin espacios ni "+"

  yape: {
    qr: "fotos/yape.png",                     // tu QR de Yape
    titular: "Juan Arturo Machuca Ampuero",   // nombre que aparece al yapear
    numero: "993 600 528",                  // no se muestra: solo se copia con el botón
  },

  // Formulario de Google (se conecta en el siguiente paso; por ahora vacío)
  formulario: {
    urlEnvio: "",
    campoNombre: "",
    campoAsistencia: "",
  },

  // ----- APORTES VOLUNTARIOS -----
  // "avance" = porcentaje cubierto, de 0 a 100. En 100 sale "¡Listo!".
  // Los montos NO van aquí (este archivo es público). Tus costos y la tabla
  // para calcular el % están en tus notas privadas del proyecto.
  gastos: [
    {
      nombre: "DJ",
      detalle: "Para que nadie se quede sentado: música y sonido toda la noche.",
      avance: 0,
      aportaron: [],
    },
    {
      nombre: "Barman",
      detalle: "Cinco horas de barra para que tu vaso nunca esté vacío.",
      avance: 0,
      aportaron: [],
    },
    {
      nombre: "Cócteles y tragos",
      detalle: "Todo lo que el barman necesita para hacer su magia: licores, hielo y frutas.",
      avance: 0,
      aportaron: [],
    },
  ],

  // ----- "¿PREFIERES LLEVAR ALGO?" (se abre en una ventana) -----
  // "medida" = presentación (botella de 3 L, bolsa de 5 kg…). En piqueos no hace falta.
  // Cuando ya tengas suficiente de algo, cambia  completado: false  por  completado: true
  // y en la página saldrá "¡Completado!" (ya no se podrá marcar).
  // Quién trae qué y cuánto lo anotas en tu Excel de control.
  paraLlevar: {
    titulo: "¿Prefieres llevar algo?",
    subtitulo: "Si te provoca aportar con un trago o algo para picar, aquí está lo que nos falta.",
    ventanaTitulo: "¿Qué te animas a llevar?",
    ventanaTexto: "Marca lo que quieras llevar, elige cuántas y te lo anoto.",
    grupos: [
      {
        nombre: "Tragos y hielo",
        nota: "Con esto el barman prepara chilcanos, piña colada, mojito de maracuyá, daiquiri y laguna azul.",
        items: [
          { nombre: "Pisco",             medida: "Botella de 750 ml",  completado: false },
          { nombre: "Ron blanco",        medida: "Botella de 750 ml",  completado: false },
          { nombre: "Vodka",             medida: "Botella de 750 ml",  completado: false },
          { nombre: "Curaçao azul",      medida: "Botella de 700 ml",  completado: false },
          { nombre: "Ginger ale",        medida: "Botella de 1.5 L",   completado: false },
          { nombre: "Sprite",            medida: "Botella de 3 L",     completado: false },
          { nombre: "Inca Kola",         medida: "Botella de 3 L",     completado: false },
          { nombre: "Coca-Cola",         medida: "Botella de 3 L",     completado: false },
          { nombre: "Hielo",             medida: "Bolsa de 5 kg",      completado: false },
        ],
      },
      {
        nombre: "Piqueos",
        nota: "Algo salado o dulce para compartir en la noche.",
        items: [
          { nombre: "Bocaditos salados",         completado: false },
          { nombre: "Papitas, chifles y camotes", completado: false },
          { nombre: "Canchita y maní",           completado: false },
          { nombre: "Bocaditos dulces",          completado: false },
          { nombre: "Chocotejas y trufas",       completado: false },
        ],
      },
    ],
  },

};
