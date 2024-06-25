export default function plansItems() {
  const plansItems = document.querySelectorAll('[data-span="plan-time"]');
  const toggleElement = document.querySelector(".toggleElementJs");
  function plans(eventToggle) {
    if (!eventToggle.target.classList.contains("ativo")) {
      plansItems.forEach((plan) => {
        plan.classList.add("ativo");
        plansItems[2].textContent = "$90/yr";
        plansItems[1].textContent = "$120/yr";
        plansItems[0].textContent = "$150/yr";
      });
    } else {
      plansItems.forEach((plan) => {
        plan.classList.remove("ativo");
        plansItems[2].textContent = "$9/mo";
        plansItems[1].textContent = "$12/mo";
        plansItems[0].textContent = "$15/mo";
      });
    }
  }
  toggleElement.addEventListener("click", plans);
}
