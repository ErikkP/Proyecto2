function getData() {
    const url = "https://api.football-data.org/v2/competitions/2014/teams";
    
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
    //    console.log(data)
       let equipos = data.teams
       console.log(equipos)
       crearImg(equipos)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getData();


  function crearImg(teams) {
    let caja = document.getElementById("imgnav")
    for (let i = 0; i < teams.length; i++) {
        let escudo = document.createElement("img")
        escudo.setAttribute("src", teams[i].crestUrl)
        escudo.classList.add("imgnav")
        let link = document.createElement("a")
        link.setAttribute("target", "_blank")
        link.setAttribute("href", teams[i].website)
        link.append(escudo)
        caja.append(link)
    }
  }