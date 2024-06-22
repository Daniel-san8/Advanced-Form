export default function validationInputs() {
  const inputEmail = document.querySelector('[data-input="email"]');
  const rgxEmail = /^\S+@\S+\.\S+$/;

  inputEmail.addEventListener("change", () => {
    if (rgxEmail.test(inputEmail.value)) {
      console.log("VALIDADO!!");
      inputEmail.classList.add("inputValidateJs");
    }
  });
}
