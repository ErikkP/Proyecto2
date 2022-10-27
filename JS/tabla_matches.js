// let equipo_local = partidos.matches[0].homeTeam.name;
// console.log(equipo_local);
// let resultado_local = partidos.matches[0].score.fullTime.homeTeam
// console.log(resultado_local)

// let equipo_visitante = partidos.matches[0].awayTeam.name;
// console.log(equipo_visitante)

// let resultado_visitante = partidos.matches[0].score.fullTime.awayTeam
// console.log(resultado_visitante)

// let fecha = partidos.matches[0].matchday
// console.log(fecha)

// let jornada = partidos.matches[0].season.startDate
// console.log(jornada)

// let posicion = clasificacion.standings[0].table[0].position

// let barcelona = clasificacion.standings[0].table[0].team.name
// // console.log(barcelona)

// let partidosbar = clasificacion.standings[0].table[0].playedGames
// // console.log(partidosbar)

// let victorias = clasificacion.standings[0].table[0].won
// // console.log(victorias)

// let empates = clasificacion.standings[0].table[0].draw
// // console.log(empates)

// let derrotas = clasificacion.standings[0].table[0].lost
// // console.log(derrotas)

// let gf = clasificacion.standings[0].table[0].goalsFor
// // console.log(gf)

// let gc = clasificacion.standings[0].table[0].goalsAgainst
// // console.log(gc)

// let gd = clasificacion.standings[0].table[0].goalDifference
// // console.log(gd)

// let pts = clasificacion.standings[0].table[0].points
// // console.log(pts)

// console.log(posicion, barcelona, partidosbar, victorias, empates, derrotas, gf, gc, gd, pts)

// let posicionvcf = clasificacion.standings[0].table[6].position

// let valenciacf = clasificacion.standings[0].table[6].team.name
// // console.log(barcelona)

// let partidosval = clasificacion.standings[0].table[6].playedGames
// // console.log(partidosbar)

// let victoriascf = clasificacion.standings[0].table[6].won
// // console.log(victorias)

// let empatescf = clasificacion.standings[0].table[6].draw
// // console.log(empates)

// let derrotascf = clasificacion.standings[0].table[6].lost
// // console.log(derrotas)

// let gfcf = clasificacion.standings[0].table[6].goalsFor
// // console.log(gf)

// let gccf = clasificacion.standings[0].table[6].goalsAgainst
// // console.log(gc)

// let gdcf = clasificacion.standings[0].table[6].goalDifference
// // console.log(gd)

// let ptscf = clasificacion.standings[0].table[6].points

// console.log(posicionvcf, valenciacf, partidosval, victoriascf, empatescf, derrotascf, gfcf, gccf, gdcf, ptscf)

// let equipo_local = partidos.matches[0].homeTeam.name;
// let equipo_visitante = partidos.matches[1].awayTeam.name;

// console.log(datos)

// for (let i = 0; i < datos.length; i++) {
//   let equipo_local = datos[i].homeTeam.name;
// //   console.log(equipo_local);

//   let equipo_visitante = datos[i].homeTeam.name;
// //   console.log(equipo_visitante);

//   let datosequipos = [equipo_local, equipo_visitante];
//   for (let j = 0; j < datosequipos.length; j++) {
//     let nombre = document.createElement("p")
//     nombre.innerHTML = datosequipos[j];
//     console.log(nombre)
//   }
// }

// let datos = partidos.matches;
// console.log(datos);
quitarAlert1();
quitarAlert2();
quitarAlert3();

function getData() {
  const url = "https://api.football-data.org/v2/competitions/2014/matches";

  fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "13a02bbaf59e4fcba26d4d2e39973bdf",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.log(response);
    })
    .then((data) => {
      // console.log(data)
      let datos = data.matches;

      crearTabla(datos);
      let borrar = document.getElementById("borrar");
      borrar.addEventListener("click", () => {
        console.log("funciona boton de borrar");
        resetFilter(datos);
        quitarAlert1();
        quitarAlert2();
        quitarAlert3();
      });

      let buscar = document.getElementById("boton_busqueda");
      buscar.addEventListener("click", () => {
        filtrarEquipos(datos);
      });
      
      crearTabla(datos)
      // console.log(datos)
    })
    .catch((error) => {
      console.log(error);
    });
}
getData();

function crearTabla(tomate) {
  let cuerpo_tabla = document.getElementById("tabla");
  cuerpo_tabla.innerHTML = "";
  for (let i = 0; i < tomate.length; i++) {
    let tr = document.createElement("tr");

    let equipo_local = document.createElement("p");
    equipo_local.innerHTML = tomate[i].homeTeam.name;

    let equipo_visitante = document.createElement("p");
    equipo_visitante.innerHTML = tomate[i].awayTeam.name;

    let resultado_local = document.createElement("p");
    resultado_local.innerHTML = tomate[i].score.fullTime.homeTeam;
    let resultado_visitante = document.createElement("p");
    resultado_visitante.innerHTML = tomate[i].score.fullTime.awayTeam;
    let imgEqLocal = document.createElement("img");
    imgEqLocal.setAttribute(
      "src",
      "https://crests.football-data.org/" + tomate[i].homeTeam.id + ".svg"
    );
    let imgEqVisitante = document.createElement("img");
    imgEqVisitante.setAttribute(
      "src",
      "https://crests.football-data.org/" + tomate[i].awayTeam.id + ".svg"
    );

    imgEqLocal.classList.add("imgLocal");

    imgEqVisitante.classList.add("imgVisitante");

    let fecha = new Date(tomate[i].utcDate);

    let jornada = document.createElement("p");
    jornada.innerHTML = tomate[i].matchday;

    let datos_tabla = [
      equipo_local,
      imgEqLocal,
      resultado_local,
      resultado_visitante,
      imgEqVisitante,
      equipo_visitante,
      fecha.toLocaleString(),
      jornada,
    ];

    // console.log(datos_tabla);
    for (let t = 0; t < datos_tabla.length; t++) {
      let td = document.createElement("td");
      td.append(datos_tabla[t]);
      tr.append(td);
    }

    cuerpo_tabla.append(tr);
  }
}

function filtrarEquipos(matches) {
  let input_filtro = document.querySelector("input[type=text]").value;
  let radioBoton = document.querySelector("input[type=radio]:checked");
  let alerta1 = document.getElementById("alert1");
  if (input_filtro == "") {
    return (alerta1.style.display = "block");
  }

  let alerta2 = document.getElementById("alert2");
  let nombreEquipoInput = datos.filter((p) => {
    if (
      p.homeTeam.name.toLowerCase().includes(input_filtro.toLowerCase()) ||
      p.awayTeam.name.toLowerCase().includes(input_filtro.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
  if (nombreEquipoInput.length === 0) {
    // return (alerta2.style.display = "block");
    alerta2.style.display = "block";
    return crearTabla(matches);
  }

  let alerta3 = document.getElementById("alert3");
  if (radioBoton == null) {
    // return (alerta3.style.display = "block");
    alerta3.style.display = "block";
    return crearTabla(matches);
  }

  let ganados = document.getElementById("flexRadioDefault1");
  let perdidos = document.getElementById("flexRadioDefault2");
  let empatados = document.getElementById("flexRadioDefault3");
  let por_jugar = document.getElementById("flexRadioDefault4");

  let filtroEquipo = matches.filter((partido) => {
    if (
      partido.homeTeam.name
        .toLowerCase()
        .includes(input_filtro.toLowerCase()) ||
      partido.awayTeam.name.toLowerCase().includes(input_filtro.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  let filterButtons = filtroEquipo.filter((partido) => {
    if (ganados.checked === true) {
      if (
        (partido.homeTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == "HOME_TEAM") ||
        (partido.awayTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == "AWAY_TEAM")
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (perdidos.checked === true) {
      if (
        (partido.homeTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == "AWAY_TEAM") ||
        (partido.awayTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == "HOME_TEAM")
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (empatados.checked === true) {
      if (
        (partido.homeTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == "DRAW") ||
        (partido.awayTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == "DRAW")
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (por_jugar.checked === true) {
      if (
        (partido.homeTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == null) ||
        (partido.awayTeam.name
          .toLowerCase()
          .includes(input_filtro.toLowerCase()) &&
          partido.score.winner == null)
      ) {
        return true;
      } else {
        return false;
      }
    }
  });

  // if (  (condicion1)   ||   (condicion2)){}

  console.log(filterButtons);
  crearTabla(filterButtons);
}

function resetFilter() {
  // let input = document.getElementById("borrar")
  // input.value = "";

  document.querySelector("input[type=text]").value = "";
  let radioButton = document.getElementsByName("flexRadioDefault");

  for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].checked = false;
  }

  crearTabla(datos);
}

// let borrar = document.getElementById("borrar")
// borrar.addEventListener("click", () => {
//   console.log("funciona boton de borrar")
//   resetFilter();
//   quitarAlert1();
//   quitarAlert2();
//   quitarAlert3();
// })

// let buscar = document.getElementById("boton_busqueda");
// buscar.addEventListener("click", () => {
//   filtrarEquipos(datos);
// })

function quitarAlert1() {
  let alerta1 = document.getElementById("alert1");
  alerta1.style.display = "none";
}

function quitarAlert2() {
  let alerta2 = document.getElementById("alert2");
  alerta2.style.display = "none";
}

function quitarAlert3() {
  let alerta3 = document.getElementById("alert3");
  alerta3.style.display = "none";
}
