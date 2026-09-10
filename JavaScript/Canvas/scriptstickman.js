const canvas = document.getElementById('canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 6;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';

contexto.beginPath();
contexto.arc(250, 150, 15, 0, Math.PI*2);
contexto.stroke();

//Da cabeça para o corpo
contexto.beginPath();
contexto.moveTo(247, 165);
contexto.lineTo(247, 220);

//Da cabeça para o braço esquerdo
contexto.moveTo(247, 165);
contexto.lineTo(225, 195);
contexto.lineTo(255, 208);

//Da cabeça para o braço direito
contexto.moveTo(247, 165);
contexto.lineTo(270, 190);
contexto.lineTo(290, 168);

//Do torso para a perna esquerda
contexto.moveTo(247, 220);
contexto.lineTo(230, 250);
contexto.lineTo(228, 290);

//Do torso para a perna direita
contexto.moveTo(247, 220);
contexto.lineTo(265, 250);
contexto.lineTo(267, 290);
contexto.stroke();