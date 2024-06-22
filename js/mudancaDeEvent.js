export default function mudancaDeEvent() {
  window.addEventListener("load", () => {
    const buttonElement = document.querySelector("[data-button]");
    buttonElement.addEventListener("click", (event) => {
      event.preventDefault();
      const elementForm1 = document.querySelector('[data-form="1"');
      elementForm1.classList.add("noneJs");
    });
  });
}
