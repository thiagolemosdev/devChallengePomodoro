(() => {
  const botoes = document.querySelectorAll(".seta");
  let minutos = document.querySelector(".minutos");
  let pausas = document.querySelector(".pausas");
  let sessoes = document.querySelector(".sessoes");
  const comecar = document.querySelector(".comecar");

  botoes.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (event.target.classList.contains("aumenta-minutos")) {
        const num = +minutos.innerText + 1;
        minutos.innerText = num;
      } else if (event.target.classList.contains("diminui-minutos")) {
        const num = +minutos.innerText - 1;
        minutos.innerText = num;
      } else if (event.target.classList.contains("aumenta-pausa")) {
        const num = +pausas.innerText + 1;
        pausas.innerText = num;
      } else if (event.target.classList.contains("diminui-pausa")) {
        const num = +pausas.innerText - 1;
        pausas.innerText = num;
      } else if (event.target.classList.contains("aumenta-sessoes")) {
        const num = +sessoes.innerText + 1;
        sessoes.innerText = num;
      } else if (event.target.classList.contains("diminui-sessoes")) {
        const num = +sessoes.innerText - 1;
        sessoes.innerText = num;
      }
    });
  });

  comecar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("minutos", minutos.innerText);
    localStorage.setItem("pausas", pausas.innerText);
    localStorage.setItem("sessoes", sessoes.innerText);
    window.location.href = "pomodoro.html";
  });
})();
