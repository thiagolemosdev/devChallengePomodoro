(() => {
  const tempo = document.querySelector(".tempo p");
  const sessoes = document.querySelectorAll(".sessoes span");
  const sessao = document.querySelector(".sessoes");

  if (sessoes.length < localStorage.getItem("sessoes")) {
    console.log(localStorage.getItem("sessoes"));
    let span = document.createElement("span");
    span.innerText = "o";
    sessao.appendChild(span);
  }

  tempo.innerText = localStorage.getItem("minutos") + ":00";
})();
