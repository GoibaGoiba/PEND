const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");
navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then(function (stream) {
    video.srcObject = stream;
  })
  .catch(function (erro) {
    console.log("Erro ao acessar a câmera:", erro);
  });

botao.addEventListener("click", function () {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  foto.src = canvas.toDataURL("image/png");
});
