let index = 1;
const max = 60;
const img = document.getElementById("car");

setInterval(() => {
  img.src = `FORZACARS/forza (${index}).png`;
  index++;
  if (index > max) index = 1;
}, 2000);
