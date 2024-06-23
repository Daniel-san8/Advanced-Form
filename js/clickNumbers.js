export default function clickNumbers() {
  const numbers = document.querySelectorAll('[data-numbers="number"]');

  const options = document.querySelectorAll('[data-options="option"]');

  numbers.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove("numberClickJs");
      }
      if (true) {
        e.target.classList.add("numberClickJs");
      }
    });
  });
}
