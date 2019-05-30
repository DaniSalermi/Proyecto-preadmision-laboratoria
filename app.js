// ! VARIABLES


let name;
let preguntaSeleccionada;
let cantidadPreguntas;
let listadoPreguntasAUtilizar;
let puntaje;
let categoriaSeleccionada;

// Arreglo de Objetos
let preguntasBigBangTheory = [
  {
    pregunta: '¿Cuál es el superhéroe favorito de Sheld Cooper?',
    respuesta1: 'Batman',
    respuesta2: 'Superman',
    respuesta3: 'Flash',
    respuestaCorrecta: 'Flash'
  },
  {
    pregunta: '¿Como se llama la primera novia de Raj?',
    respuesta1: 'Pamela',
    respuesta2: 'Lucy',
    respuesta3: 'Bernadette',
    respuestaCorrecta: 'Lucy'
  },
  {
    pregunta: '¿Cuantas temporadas tiene la serie?',
    respuesta1: '10',
    respuesta2: '9',
    respuesta3: '12',
    respuestaCorrecta: '10'
  },
  {
    pregunta: '¿Que palabra utiliza Sheldon Cooper para indicar que algo le causó gracia, acaba de hacer una broma o tiene ganas de reirse?',
    respuesta1: 'Bazinga',
    respuesta2: 'Recorcholis',
    respuesta3: 'Diantres',
    respuestaCorrecta: 'Bazinga'
  },
  {
    pregunta: '¿De todos los personajes de la serie, ¿Cuál es el único que tiene un show en solitario como una precuela a The Big Bank Theory?',
    respuesta1: 'Penny',
    respuesta2: 'Leonard',
    respuesta3: 'Sheldon',
    respuestaCorrecta: 'Sheldon'
  },
  {
    pregunta: '¿Durante cuál temporada Sheldon Cooper deja a un lado la castidad y está por primera vez con una mujer?',
    respuesta1: 'Temporada 8',
    respuesta2: 'Temporada 9',
    respuesta3: 'Temporada 10',
    respuestaCorrecta: 'Temporada 9'
  },
  {
    pregunta: '¿Cuál es el cociente intelectual de Sheldon Cooper?',
    respuesta1: '187',
    respuesta2: '197',
    respuesta3: '178',
    respuestaCorrecta: '187'
  },
  {
    pregunta: '¿Cuál personaje de la serie ha ido al espacio?',
    respuesta1: 'Howard Wolowitz',
    respuesta2: 'Rajesh Koothrappali',
    respuesta3: 'Sheldon Cooper',
    respuestaCorrecta: 'Howard Wolowitz'
  },
  {
    pregunta: '¿El mayor logro profesional de Rajesh Koothrappali fue?',
    respuesta1: 'Conseguir una constante para determinar la velocidad de la luz en el espacio',
    respuesta2: 'Descubrir un planeta más allá del cinturón de Kuiper.',
    respuesta3: 'Escribir un libro de fìsica cuántica',
    respuestaCorrecta: 'Descubrir un planeta más allá del cinturón de Kuiper.'
  },
  {
    pregunta: '¿Cómo se llama la canción de cuna que le canta la madre a Sheldon cuando está enfermo?',
    respuesta1: 'Stupid Kitty',
    respuesta2: 'Cute Kitty',
    respuesta3: 'Soft Kitty',
    respuestaCorrecta: 'Soft Kitty'
  },
  {
    pregunta: '¿Qué noche de la semana es designada como "noche de comic"?',
    respuesta1: 'Jueves',
    respuesta2: 'Miércoles',
    respuesta3: 'Lunes',
    respuestaCorrecta: 'Miércoles'
  },
  {
    pregunta: '¿Cómo se llama el juego que los amigos utilizan para tomar decisiones?',
    respuesta1: 'piedra - papel - tijera - pajaro - Stop',
    respuesta2: 'piedra - papel - tijera - cocodrilo - Start',
    respuesta3: 'piedra - papel - tijera - lagarto - Spock',
    respuestaCorrecta: 'piedra - papel - tijera - lagarto - Spock'
  },
  {
    pregunta: '¿De todos los personajes cual es el único que en la vida real tiene un doctorado en el campo científico?',
    respuesta1: 'Rajesh Ramayan Koothrapppali (Kunal Nayyar)',
    respuesta2: 'Amy Farrah Fowler (Mayim Bialik)',
    respuesta3: 'Leonard Hofstadter (Johnny Galecki)',
    respuestaCorrecta: 'Amy Farrah Fowler (Mayim Bialik)'
  },
  {
    pregunta: '¿Cómo se llama el restaurante donde Penny trabajó casi toda la serie?',
    respuesta1: 'The cheesecake Factory',
    respuesta2: 'iHop',
    respuesta3: 'Hooters',
    respuestaCorrecta: 'The cheesecake Factory'
  },
  {
    pregunta: '¿En cuál universidad se graduó Howard Wolowitz?',
    respuesta1: 'Caltech (The California Institute of Technology)',
    respuesta2: 'MIT (Massachusetts Institute of Technology)',
    respuesta3: 'Universidad de Yale',
    respuestaCorrecta: 'MIT (Massachusetts Institute of Technology)'
  },
  {
    pregunta: '¿De los cuatro amigos cuál es el único que no tiene un doctorado?',
    respuesta1: 'Howard',
    respuesta2: 'Rajesh',
    respuesta3: 'Leonard',
    respuestaCorrecta: 'Howard'
  },
  {
    pregunta: '¿En qué fecha se emitió el episodio piloto de la serie?',
    respuesta1: '24 de septiembre de 2007',
    respuesta2: '24 de octubre de 2006',
    respuesta3: '14 de septiembre de 2007',
    respuestaCorrecta: '24 de septiembre de 2007'
  },
  {
    pregunta: '¿Cómo se llama la canción introductoria de la serie?',
    respuesta1: 'History of everything',
    respuesta2: 'Story of everything',
    respuesta3: 'History of all',
    respuestaCorrecta: 'History of everything'
  },
  {
    pregunta: '¿Dónde trabajan los 4 personajes masculinos principales?',
    respuesta1: 'MIT',
    respuesta2: 'Caltech',
    respuesta3: 'Harvard',
    respuestaCorrecta: 'Caltech'
  },
  {
    pregunta: '¿De los siguientes famosos, cual no ha tenido un cameo en la serie?',
    respuesta1: 'Stephen Hawking',
    respuesta2: 'Elon Musk',
    respuesta3: 'Jeff Bezos',
    respuestaCorrecta: 'Jeff Bezos'
  },
  {
    pregunta: '¿Cómo se llama el personaje que fue archienemigo de Sheldon durante buena parte de la serie?',
    respuesta1: 'William Wall',
    respuesta2: 'Wil Wheaton',
    respuesta3: 'Bill Snell',
    respuestaCorrecta: 'Wil Wheaton'
  }
];

let preguntasHarryPotter = [
  {
    pregunta: '¿De quién es la varita que Harry usó en su duelo final con Lord Voldemort?',
    respuesta1: 'Ginny Weasley',
    respuesta2: 'Draco Malfoy',
    respuesta3: 'Rubeus Hagrid',
    respuestaCorrecta: 'Draco Malfoy'
  },
  {
    pregunta: '¿Quién en el último partido de Quidditch reemplazó a Harry?',
    respuesta1: 'Ginny Weasley',
    respuesta2: 'Hermione Granger',
    respuesta3: 'Ron Weasley',
    respuestaCorrecta: 'Ginny Weasley'
  },
  {
    pregunta: '¿Quién tuvo una Acromántula llamada Aragog como mascota?',
    respuesta1: 'Ron Weasley',
    respuesta2: 'Lord Voldemort',
    respuesta3: 'Rubeus Hagrid',
    respuestaCorrecta: 'Rubeus Hagrid'
  },
  {
    pregunta: '¿De quién es la varita que Harry usó en su duelo final con Lord Voldemort?',
    respuesta1: 'Ginny Weasley',
    respuesta2: 'Draco Malfoy',
    respuesta3: 'Rubeus Hagrid',
    respuestaCorrecta: 'Draco Malfoy'
  },
  {
    pregunta: '¿Quién en el último partido de Quidditch reemplazó a Harry?',
    respuesta1: 'Ginny Weasley',
    respuesta2: 'Hermione Granger',
    respuesta3: 'Ron Weasley',
    respuestaCorrecta: 'Ginny Weasley'
  },
  {
    pregunta: '¿Quién tuvo una Acromántula llamada Aragog como mascota?',
    respuesta1: 'Ron Weasley',
    respuesta2: 'Lord Voldemort',
    respuesta3: 'Rubeus Hagrid',
    respuestaCorrecta: 'Rubeus Hagrid'
  },
  {
    pregunta: '¿De quién es la varita que Harry usó en su duelo final con Lord Voldemort?',
    respuesta1: 'Ginny Weasley',
    respuesta2: 'Draco Malfoy',
    respuesta3: 'Rubeus Hagrid',
    respuestaCorrecta: 'Draco Malfoy'
  },
  {
    pregunta: '¿Quién en el último partido de Quidditch reemplazó a Harry?',
    respuesta1: 'Ginny Weasley',
    respuesta2: 'Hermione Granger',
    respuesta3: 'Ron Weasley',
    respuestaCorrecta: 'Ginny Weasley'
  },
  {
    pregunta: '¿Quién tuvo una Acromántula llamada Aragog como mascota?',
    respuesta1: 'Ron Weasley',
    respuesta2: 'Lord Voldemort',
    respuesta3: 'Rubeus Hagrid',
    respuestaCorrecta: 'Rubeus Hagrid'
  }
];

// ! GUARDAR NOMBRE
function saveName() {
  name = document.getElementById('username').value;
  inicio.style = 'display: none';
  saludo.style = 'display: block';
  categorias.style = 'display: block';
  document.getElementById('nombre-usuario').innerHTML = name;
// TODO RECIBIR INFORMACION DE CATEGORIA Y COMENZAR JUEGO
// JUEGO
}

// COMENZAR JUEGO
function startGame() {
  cantidadPreguntas = 0;
  puntaje = 0;
  categoriaSeleccionada = document.querySelector('input[name="category"]:checked').value;
  // CONDICIONAL DE CATEGORÍA SELECCIONADA
 if(categoriaSeleccionada === 'HP'){
  listadoPreguntasAUtilizar = [...preguntasHarryPotter];
 
 }
else if(categoriaSeleccionada ==='TBBT'){
  listadoPreguntasAUtilizar = [...preguntasBigBangTheory] 
 
}
saludo.style = 'display: none';
categorias.style = 'display: none';
preguntaactual.style = 'display: block';
resultados.style = 'display: none';
nextQuestion();
}



// OBTENER PREGUNTA
function nextQuestion(respuesta) {

  if (
    cantidadPreguntas > 0 &&
    respuesta === preguntaSeleccionada.respuestaCorrecta
  ) {
    puntaje++;
  }
  cantidadPreguntas++;
  
  //Contador de pregunta actual
  contadorPreguntas.innerHTML=cantidadPreguntas
  if (cantidadPreguntas > 7) {
    // TODO: pantalla finalizar juego
    preguntaactual.style = 'display: none';
    resultados.style = 'display: block';
    categorias.style = 'display: block';
    document.getElementById('puntaje-usuario').innerHTML = puntaje;
   
  } else {

    //Función para obtener una posición dentro del arreglo y desplegar una pregunta aleatoria
    let numeroAlAzar = Math.floor(Math.random() * listadoPreguntasAUtilizar.length);
    preguntaSeleccionada = listadoPreguntasAUtilizar.splice(numeroAlAzar, 1)[0];

    document.getElementById('pregunta').innerHTML = preguntaSeleccionada.pregunta;
    document.getElementById('respuesta1').innerHTML = preguntaSeleccionada.respuesta1;
    document.getElementById('respuesta2').innerHTML = preguntaSeleccionada.respuesta2;
    document.getElementById('respuesta3').innerHTML = preguntaSeleccionada.respuesta3;
  }
}

