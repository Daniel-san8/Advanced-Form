export default function isChecked() {
  const inputsChecks = document.querySelectorAll("[data-check]");
  const typeGame = document.querySelectorAll('[data-type="game"]');
  inputsChecks.forEach((input) => {
    input.addEventListener("click", (event) => {
      if (input.checked) {
        input.parentElement.classList.add("checkedStyle");
      } else {
        input.parentElement.classList.remove("checkedStyle");
      }
    });
  });
}
