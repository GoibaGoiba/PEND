const canvas = document.getElementById('canvas');
const contexto = canvas.getContext('2d');

contexto.beginPath();
contexto.moveTo(0, 100);
contexto.lineTo(50, 200);
contexto.lineTo(100, 100);
contexto.lineTo(150, 200);
contexto.lineTo(200, 100);
contexto.lineTo(250, 200);
contexto.lineTo(300, 100);
contexto.lineTo(350, 200);
contexto.lineTo(400, 100);
contexto.lineTo(450, 200);
contexto.lineTo(500, 100);
contexto.fillRect(0, 200, 500, 100);
contexto.strokeRect(0, 0, 500, 100);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(0, 100);
contexto.lineTo(50, 0);
contexto.lineTo(100, 100);
contexto.lineTo(150, 0);
contexto.lineTo(200, 100);
contexto.lineTo(250, 0);
contexto.lineTo(300, 100);
contexto.lineTo(350, 0);
contexto.lineTo(400, 100);
contexto.lineTo(450, 0);
contexto.lineTo(500, 100);
contexto.stroke();

contexto.beginPath();
contexto.arc(50, 70, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(150, 70, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(250, 70, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(350, 70, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(450, 70, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(50, 131, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(150, 131, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(250, 131, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(350, 131, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(450, 131, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(100, 32, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(100, 169, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(200, 32, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(200, 169, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(300, 32, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(300, 169, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(400, 32, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(400, 169, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(0, 32, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(0, 169, 31, 0, Math.PI*2);
contexto.stroke();

contexto.beginPath();
contexto.arc(500, 169, 31, 0, Math.PI*2);
contexto.stroke();


contexto.beginPath();
contexto.arc(500, 32, 31, 0, Math.PI*2);
contexto.stroke();