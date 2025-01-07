document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.header-container').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const names = ["JavaScript", "TypeScript", "NextJs", "React", "React Native", "Angular", "NodeJs", "Python"];
  const colors = ["#F2529D"];
  const animatedName = document.getElementById('animated-name');
  let index = 0;

  function changeName() {
    animatedName.textContent = names[index];
    animatedName.style.color = colors[index];
    index = (index + 1) % names.length;
  }

  setInterval(changeName, 1000);
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('download-btn').addEventListener('click', function () {
    const pdfUrl = './assets/Juliana-Pliger-curriculo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Juliana Pliger - Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  })
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('download-btn-english').addEventListener('click', function () {
    const pdfUrl = './assets/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Juliana Pliger - Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
  document.getElementById('popup-overlay').style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
  document.getElementById('popup-overlay').style.display = 'none';
}

window.onload = function () {
  openPopup();
}

function goToEnglish() {
  window.location.href = "english.html"
}

function goToPortuguese() {
  window.location.href = "index.html"
}

window.onload = function () {
  openPopup();
}
