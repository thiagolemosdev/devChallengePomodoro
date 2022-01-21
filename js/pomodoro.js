(() => {
  const tempo = document.querySelector(".tempo p");
  tempo.innerText = localStorage.getItem("minutos") + ":00";

  let sessoes = document.querySelectorAll(".sessoes span");
  const sessao = document.querySelector(".sessoes");

  const comecar = document.querySelector(".play");

  function adicionaSessoes() {
    let i = sessoes.length;
    while (i < localStorage.getItem("sessoes")) {
      console.log(localStorage.getItem("sessoes"));
      let span = document.createElement("span");
      span.innerText = "o";
      sessao.appendChild(span);
      i++;
    }
  }
  adicionaSessoes();

  let minutos = tempo.innerText.slice(0, 2);
  let segundos = 59;
  let contarSegundos;
  let contarMinutos;

  comecar.addEventListener("click", function () {
    clearInterval(contarSegundos);
    clearInterval(contarMinutos);
    contador();
  });

  function contador() {
    contarSegundos = setInterval(() => {
      tempo.innerHTML = `${("00" + minutos).slice(-2)}:${(
        "00" + segundos--
      ).slice(-2)}`;
    }, 1000);

    contarMinutos = setInterval(() => {
      segundos = 59;
      minutos--;
    }, 60000);
  }
})();
