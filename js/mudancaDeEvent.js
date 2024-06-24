export default function mudancaDeEvent() {
  const buttonElement = document.querySelector("[data-button]");
  const elementForm1 = document.querySelector('[data-form="1"');
  const elementForm2 = document.querySelector('[data-form="2"]');
  const numbers = document.querySelectorAll('[data-numbers="number"]');
  window.addEventListener("load", () => {
    buttonElement.addEventListener("click", (event) => {
      event.preventDefault();
      // elementForm1.classList.add("noneJs");
    });
  });

  function captaNumbers(e) {
    let number = Number(e.target.innerHTML);
    if (number === 1) {
      elementForm1.classList.remove("noneJs");
      elementForm2.classList.add("noneJs");
    } else if (number === 2) {
      elementForm1.classList.add("noneJs");
      elementForm2.classList.remove("noneJs");
    }
    // } else if (number === 3) {
    //   elementForm1.classList.add("noneJs");
    //   elementForm2.classList.add("noneJs");
    //   elementForm3.classList.remove("noneJs");
    //   elementForm4.classList.add("noneJs");
    // } else if (number === 4) {
    //   elementForm1.classList.add("noneJs");
    //   elementForm2.classList.add("noneJs");
    //   elementForm3.classList.add("noneJs");
    //   elementForm4.classList.remove("noneJs");
    // }
  }

  numbers.forEach((number) => {
    number.addEventListener("click", captaNumbers);
  });
}
