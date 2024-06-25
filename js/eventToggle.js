export default function eventToggle() {
  const elementToggle = document.querySelector(".toggleElement");
  const elementToggleLabel = document.querySelector(".toggleElementJs");
  const monthly = document.querySelector("[data-monthly]");
  const yearly = document.querySelector(".yearly");
  elementToggle.addEventListener("click", () => {
    if (elementToggleLabel.classList.contains("ativo")) {
      elementToggleLabel.classList.remove("ativo");
      elementToggleLabel.classList.add("desativado");
      monthly.classList.remove("desativado");
      yearly.classList.remove("ativo");
    } else {
      elementToggleLabel.classList.remove("desativado");
      elementToggleLabel.classList.add("ativo");
      monthly.classList.add("desativado");
      yearly.classList.add("ativo");
    }
  });
}
