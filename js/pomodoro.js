(() => {
  const tempo = document.querySelector(".tempo p");
  tempo.innerText = localStorage.getItem("minutos") + ":00";
  if (tempo.innerText.length < 5) {
    tempo.innerText = "0" + tempo.innerText;
  }

  let pausa = localStorage.getItem("pausas") - 1;

  let sessoes = document.querySelectorAll(".sessoes span");
  const sessao = document.querySelector(".sessoes");

  const comecar = document.querySelector(".play");

  function adicionaSessoes() {
    let i = sessoes.length;
    while (i < localStorage.getItem("sessoes")) {
      let span = document.createElement("span");
      span.innerText = "o";
      sessao.appendChild(span);
      i++;
    }
  }
  adicionaSessoes();

  let minutos = tempo.innerText.slice(0, -3) - 1;
  let segundos = 59;
  let contarSegundos;
  let contarMinutos;

  comecar.addEventListener("click", function () {
    clearInterval(contarSegundos);
    clearInterval(contarMinutos);
    contador();
  });

  function intervalo() {
    console.log;
    contarSegundos = setInterval(() => {
      tempo.innerHTML = `${("00" + pausa).slice(-2)}:${(
        "00" + segundos--
      ).slice(-2)}`;
    }, 1000);

    contarMinutos = setInterval(() => {
      segundos = 59;
      pausa--;
    }, 60000);
  }

  function finalTrabalho() {
    if (segundos == 0 && minutos == 0) {
      clearInterval(contarSegundos);
      clearInterval(contarMinutos);
      intervalo();
      segundos = 59;
    }
  }

  function contador() {
    contarSegundos = setInterval(() => {
      tempo.innerHTML = `${("00" + minutos).slice(-2)}:${(
        "00" + segundos--
      ).slice(-2)}`;
      finalTrabalho();
    }, 1000);

    contarMinutos = setInterval(() => {
      segundos = 59;
      minutos--;
    }, 60000);
  }
})();
