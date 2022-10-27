function getData() {
  document.getElementById("spinner").style.display = "block"
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
      document.getElementById("spinner").style.display = "none"
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
