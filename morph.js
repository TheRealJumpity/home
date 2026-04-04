// morph.js
// Requires anime.js (https://animejs.com)

document.addEventListener("DOMContentLoaded", () => {
  const smile = document.querySelector("#smilePath");
  const metoPath = document.querySelector("#metoPath");

  // Hide METO initially
  metoPath.setAttribute("opacity", 0);

  anime({
    targets: smile,
    d: [
      { value: metoPath.getAttribute("d") } // Morph to METO path
    ],
    duration: 1500,
    easing: 'easeInOutQuad',
    complete: () => {
      // After morph, show METO text (optional)
      anime({
        targets: metoPath,
        opacity: 1,
        duration: 300,
        easing: 'linear'
      });

      // Fade out after 1.75s
      setTimeout(() => {
        anime({
          targets: "#introContainer",
          opacity: 0,
          duration: 500,
          easing: 'linear',
          complete: () => {
            document.getElementById("introContainer").style.display = "none";
            // Show main UI
            const mainUI = document.getElementById("mainUI");
            mainUI.style.transition = "opacity 0.8s";
            mainUI.style.opacity = 1;
            mainUI.style.pointerEvents = "auto";
          }
        });
      }, 1750);
    }
  });
  
});
