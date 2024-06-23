export default function clickNumbers() {
  const numbers = document.querySelectorAll('[data-numbers="number"]');

  const options = document.querySelectorAll('[data-options="option"]');

  numbers.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (true) {
        e.target.classList.add("numberClickJs");
        console.log("number clicked");
      }
    });
    item.classList.remove("numberClickJs");
  });
}
