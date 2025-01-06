document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.header-container').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const names = ["JavaScript", "TypeScript", "NextJs", "React", "React Native", "Angular", "NodeJs", "Python"];
  const colors = [ "#F2D5D8" ];
  const animatedName = document.getElementById('animated-name');
  let index = 0;

  function changeName() {
      animatedName.textContent = names[index];
      animatedName.style.color = colors[index];
      index = (index + 1) % names.length;
  }

  setInterval(changeName, 1000); 
});

document.getElementById('download-btn').addEventListener('click', function() {
  const pdfUrl = './assets/curriculo.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Juliana Pliger - Curriculo.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
