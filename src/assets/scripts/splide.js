import Splide from "@splidejs/splide";


/****************************
     SPLIDE - INDEX.HTML
*****************************/
//Generaba un error cuando cargaba cualquier página que no
//tuviera el slider.
//Sol: https://github.com/Splidejs/splide/discussions/1032

document.addEventListener("DOMContentLoaded", function () {
  const splideCheck = document.getElementsByClassName("splide").length;
  if (splideCheck) {
    new Splide("#fullscreen-carousel", {
      width: "100vw",
      height: "60vh",
      type: "loop",
      autoplay: "play",
     /*  lazyLoad: 'nearby' */
    }).mount();
  }
});
