export default function mudancaDeEvent() {
  const buttonElementNext = document.querySelectorAll("[data-button]");
  const buttonElementPrevious = document.querySelectorAll("[data-goBack]");

  const elementForm1 = document.querySelector('[data-form="1"');
  const elementForm2 = document.querySelector('[data-form="2"]');
  const elementForm3 = document.querySelector('[data-form="3"]');
  const elementForm4 = document.querySelector('[data-form="4"]');

  const numbers = document.querySelectorAll('[data-numbers="number"]');
  const options = document.querySelectorAll('[data-options="option"]');
  const datachange = document.querySelector("[data-change]");

  let count = 0;
  let back = 4;
  window.addEventListener("load", () => {
    buttonElementNext.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        switch (count) {
          case 0:
            elementForm1.classList.add("noneJs");
            elementForm2.classList.remove("noneJs");
            estilizaNumbersNext();
            count++;
            back--;
            break;
          case 1:
            elementForm2.classList.add("noneJs");
            elementForm3.classList.remove("noneJs");
            estilizaNumbersNext();
            count++;
            back--;
            break;
          case 2:
            elementForm3.classList.add("noneJs");
            elementForm4.classList.remove("noneJs");
            estilizaNumbersNext();
            count++;
            back--;
            break;
        }
      });
    });
  });

  buttonElementPrevious.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      switch (back) {
        case 3:
          elementForm1.classList.remove("noneJs");
          elementForm2.classList.add("noneJs");
          estilizaPrevious();
          count--;
          back++;
          break;
        case 2:
          elementForm2.classList.remove("noneJs");
          elementForm3.classList.add("noneJs");
          estilizaPrevious();
          count--;
          back++;
          break;
        case 1:
          elementForm3.classList.remove("noneJs");
          elementForm4.classList.add("noneJs");
          estilizaPrevious();
          count--;
          back++;
          break;
      }
    });
  });

  datachange.addEventListener("click", () => {
    elementForm3.classList.remove("noneJs");
    elementForm4.classList.add("noneJs");
    estilizaPrevious();
    count = 2;
    back = 2;
  });

  function estilizaPrevious() {
    switch (back) {
      case 3:
        numbers[0].classList.add("numberClickJs");
        numbers[1].classList.remove("numberClickJs");
        break;
      case 2:
        numbers[1].classList.add("numberClickJs");
        numbers[2].classList.remove("numberClickJs");
        break;
      case 1:
        numbers[2].classList.add("numberClickJs");
        numbers[3].classList.remove("numberClickJs");
        break;
    }
  }

  function estilizaNumbersNext() {
    numbers[++count].classList.add("numberClickJs");
    numbers[--count].classList.remove("numberClickJs");
  }

  function captaNumbers(e) {
    let number = Number(e.target.innerHTML);
    if (number === 1) {
      elementForm1.classList.remove("noneJs");
      elementForm2.classList.add("noneJs");
      elementForm3.classList.add("noneJs");
      elementForm4.classList.add("noneJs");
      count = 0;
      back = 4;
    } else if (number === 2) {
      elementForm1.classList.add("noneJs");
      elementForm2.classList.remove("noneJs");
      elementForm3.classList.add("noneJs");
      elementForm4.classList.add("noneJs");
      count = 1;
      back = 3;
    } else if (number === 3) {
      elementForm1.classList.add("noneJs");
      elementForm2.classList.add("noneJs");
      elementForm3.classList.remove("noneJs");
      elementForm4.classList.add("noneJs");
      count = 2;
      back = 2;
    } else if (number === 4) {
      elementForm1.classList.add("noneJs");
      elementForm2.classList.add("noneJs");
      elementForm3.classList.add("noneJs");
      elementForm4.classList.remove("noneJs");
      count = 3;
      back = 1;
    }
  }

  function captaOptions(e) {
    let option = e.target.innerHTML.toLowerCase();
    switch (option) {
      case "your info":
        count = 0;
        back = 4;
        elementForm1.classList.remove("noneJs");
        elementForm2.classList.add("noneJs");
        elementForm3.classList.add("noneJs");
        elementForm4.classList.add("noneJs");
        break;
      case "select plan":
        count = 1;
        back = 3;
        elementForm1.classList.add("noneJs");
        elementForm2.classList.remove("noneJs");
        elementForm3.classList.add("noneJs");
        elementForm4.classList.add("noneJs");
        break;
      case "add-ons":
        count = 2;
        back = 2;
        elementForm1.classList.add("noneJs");
        elementForm2.classList.add("noneJs");
        elementForm3.classList.remove("noneJs");
        elementForm4.classList.add("noneJs");
        break;
      case "summary":
        count = 4;
        back = 1;
        elementForm1.classList.add("noneJs");
        elementForm2.classList.add("noneJs");
        elementForm3.classList.add("noneJs");
        elementForm4.classList.remove("noneJs");
        break;
    }
  }

  numbers.forEach((number) => {
    number.addEventListener("click", captaNumbers);
  });
  options.forEach((option) => {
    option.addEventListener("click", captaOptions);
  });
}
