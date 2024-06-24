export default function imgMobile() {
  window.addEventListener("load", () => {
    const imgDesktop = document.querySelector("[data-img]");
    const imgMobileJs = "./images/bg-sidebar-mobile.svg";
    const imgDesktopJs = "./images/bg-sidebar-desktop.svg";

    if (innerWidth <= 810) {
      imgDesktop.setAttribute("src", imgMobileJs);
    }
    window.addEventListener("resize", () => {
      const mediaQueryJs = matchMedia("(max-width: 810px)").matches;

      if (mediaQueryJs) {
        imgDesktop.setAttribute("src", imgMobileJs);
      } else {
        imgDesktop.setAttribute("src", imgDesktopJs);
      }
    });
  });
}
