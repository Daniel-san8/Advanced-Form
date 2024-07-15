export default function nextAndBack() {
  const finish = document.querySelector(".item-finish");
  const finish2 = document.querySelector(".item-finish2");
  const plano = document.querySelector("[data-plano-ok]");
  let labelsPlans = document.querySelectorAll(".plans-items");

  labelsPlans.forEach((labelPlan) => {
    labelPlan.addEventListener("click", (e) => {
      let planoOk = e.currentTarget.children[1].innerHTML;
      console.log(planoOk);
      switch (planoOk) {
        case "Arcade":
          plano.innerHTML = "Arcade";
          break;

        case "Advanced":
          plano.innerHTML = "Advanced";
          break;
        case "Pro":
          plano.innerHTML = "Pro";
          break;
        default:
          plano.innerHTML = "Arcade";
          break;
      }
    });
  });
}
