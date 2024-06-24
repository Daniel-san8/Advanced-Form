export default function mudancaDeEvent() {
  const buttonElement = document.querySelector("[data-button]");
  const elementForm1 = document.querySelector('[data-form="1"');
  const elementForm2 = document.querySelector('[data-form="2"]');
  const numbers = document.querySelectorAll('[data-numbers="number"]');
  let count = 0;
  window.addEventListener("load", () => {
    buttonElement.addEventListener("click", (event) => {
      event.preventDefault();
      elementForm1.classList.add("noneJs");
      console.log(numbers[count]);
    });
  });
}
