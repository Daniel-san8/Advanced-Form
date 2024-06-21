export default function imgMobile() {
  window.addEventListener("load", () => {
    const imgDesktop = document.querySelector("[data-img]");
    const imgMobileJs = "./images/bg-sidebar-mobile.svg";

    const mediaQueryJs = matchMedia("(max-width: 850px)").matches;

    if (mediaQueryJs) {
      imgDesktop.setAttribute("src", imgMobileJs);
    }
  });
}
