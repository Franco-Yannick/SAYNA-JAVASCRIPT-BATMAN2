// Fonction nommée pour la lecture de la vidéo
function playVideo() {
    const labelvid = document.querySelector(".label-bd-annonce");
    const ply = document.querySelector(".bd-annonce");
    document.querySelector(".bd-annonce").style.display = "inline";
    labelvid.style.display = "none";
    ply.play();
  }
  
  // Fonction fléchée pour la gestion de l'événement 'click'
  const btply = document.querySelector(".play_icon");
  btply.addEventListener("click", () => {
    playVideo();
  });
  
  // Fonction fléchée pour la gestion de l'événement 'mouseover'
  const animesari = document.querySelector(".body");
  animesari.addEventListener("mouseover", () => {
    const corp = document.querySelector(".corp");
    corp.style.marginLeft = "0";
    corp.style.transition = "1300ms";
  });
  