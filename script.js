const cenas = {
  folha: "https://i.imgur.com/RUnMQya.png",
  nevoa: "https://i.imgur.com/your_mist.jpg",
  areia: "https://i.imgur.com/your_sand.jpg"
};

const viewer = document.getElementById("viewer");

function trocar(nome) {
  viewer.style.backgroundImage = `url(${cenas[nome]})`;
}

function limpar() {
  viewer.style.backgroundImage = "";
}