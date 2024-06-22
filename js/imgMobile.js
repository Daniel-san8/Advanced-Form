export default function imgMobile() {
  const mediaQueryJs = matchMedia("(max-width: 850px)").matches;
  window.addEventListener("load", () => {
    const imgDesktop = document.querySelector("[data-img]");
    const imgMobileJs = "./images/bg-sidebar-mobile.svg";

    if (mediaQueryJs) {
      imgDesktop.setAttribute("src", imgMobileJs);
    }
  });
}
