// let posicion = clasificacion.standings[0].table[0].position

// let barcelona = clasificacion.standings[0].table[0].team.name
// console.log(barcelona)
// console.log(posicion)

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



function getData() {
  const url = "https://api.football-data.org/v2/competitions/2014/standings";

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
      let clasif = data.standings[0].table

      crearTabla(clasif);
      function crearTabla(patata) {
        let cuerpo_tabla_calsif = document.getElementById("tablaclasif");
        cuerpo_tabla_calsif.innerHTML = "";
        for (let i = 0; i < patata.length; i++) {
          let tr = document.createElement("tr");
      
          let imgEq = document.createElement("img");
          imgEq.setAttribute(
            "src",
             patata[i].team.crestUrl
          );
          imgEq.classList.add("imgLocal");
          let equipos = patata[i].team.name
          let posicion = patata[i].position
          let puntos = patata[i].points
          let goles = patata[i].goalsFor
          let golescontra = patata[i].goalsAgainst
          let pg = patata[i].playedGames
      
          let clasif_datos = [
            posicion,
            imgEq,
            equipos,
            puntos,
            goles,
            golescontra,
            pg
          ]
          
          for (let t = 0; t < clasif_datos.length; t++) {
            let td = document.createElement("td");
            td.append(clasif_datos[t]);
            tr.append(td);
          }
          cuerpo_tabla_calsif.append(tr);
        }
      }
      crearTabla(clasif);
      
      
      crearTabla(clasif);
    
    })
    .catch((error) => {
      console.log(error);
    });
}
getData();



// let clasif = clasificacion.standings[0].table
// console.log(clasif);
// function crearTabla(patata) {
//   let cuerpo_tabla_calsif = document.getElementById("tablaclasif");
//   cuerpo_tabla_calsif.innerHTML = "";
//   for (let i = 0; i < patata.length; i++) {
//     let tr = document.createElement("tr");

//     let imgEq = document.createElement("img");
//     imgEq.setAttribute(
//       "src",
//        patata[i].team.crestUrl
//     );
//     imgEq.classList.add("imgLocal");
//     let equipos = patata[i].team.name
//     let posicion = patata[i].position
//     let puntos = patata[i].points
//     let goles = patata[i].goalsFor
//     let golescontra = patata[i].goalsAgainst
//     let pg = patata[i].playedGames

//     let clasif_datos = [
//       posicion,
//       imgEq,
//       equipos,
//       puntos,
//       goles,
//       golescontra,
//       pg
//     ]
    
//     for (let t = 0; t < clasif_datos.length; t++) {
//       let td = document.createElement("td");
//       td.append(clasif_datos[t]);
//       tr.append(td);
//     }
//     cuerpo_tabla_calsif.append(tr);
//   }
// }
// crearTabla(clasif);
