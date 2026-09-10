const locationGood = document.querySelector("#locationGood")
const locationBad = document.querySelector("#locationBad")

navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: ", posicao.coords.latitude);
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);
        locationBad.style.display = "none";
        locationGood.style.display = "block";
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
        locationBad.style.display = "block";
        locationGood.style.display = "none";
    }
);
