export default function mudancaDeEvent() {
  window.addEventListener("load", () => {
    let widthMedia = matchMedia("(max-width: 810px)").matches;
    window.addEventListener("resize", () => {
      const buttonElement = document.querySelector("[data-button]");
      buttonElement.addEventListener("click", (event) => {
        event.preventDefault();
        const elementForm1 = document.querySelector('[data-form="1"');
        console.log(elementForm1);
      });
      if (widthMedia) {
      }
    });
  });
}
