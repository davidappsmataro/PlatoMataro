/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  document.addEventListener("DOMContentLoaded", function () {
    /****************************
     MENÚ BURGUER & STICKY NAVBAR
*****************************/
    const opcionesMenu = document.querySelector(".header__navbar-menu");
    const opcion = document.querySelectorAll(".header__navbar-menu-link");
    const bBurguer = document.querySelector(".header__navbar-bburguer-btn");

    //constrol stiky navbar
    const header = document.querySelector(".header");
    const stickyUntilFooter = document.getElementById("mataro");
    let sticky = stickyUntilFooter.offsetTop;
    const toggleMenuBurguer = () => {
      opcionesMenu.classList.toggle("header__navbar-menu--active");
    };

    const opcionSeleccionada = (e) => {
      //Si hemos pulsado una de las opciones devolvemos
      //true para cerrar el menu burguer
      let pulsadaOpcion = false;
      opcion.forEach((opc) => {
        if (opc.contains(e.target)) {
          pulsadaOpcion = true;
        }
      });
      return pulsadaOpcion;
    };

    bBurguer.addEventListener("click", toggleMenuBurguer);

    document.onclick = (e) => {
      /*  */ if (
        (!opcionesMenu.contains(e.target) && !bBurguer.contains(e.target)) ||
        opcionSeleccionada(e)
      ) {
        //si pulsamos fuera del menu lo cerramos
        opcionesMenu.classList.remove("header__navbar-menu--active");
      }
    };
    //hago scroll y el menu lo oculatamos cuando llegamos al footer
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < sticky) {
        header.classList.add("header--sticky");
      } else {
        header.classList.remove("header--sticky");
      }
    });
    //recalculo la posicion del footer si redimensiono la ventana (responsive).
    window.addEventListener("resize", () => {
      sticky = stickyUntilFooter.offsetTop;
    });
  });
})();
