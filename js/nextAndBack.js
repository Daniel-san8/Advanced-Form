export default function nextAndBack() {
  const finish = document.querySelector(".item-finish");
  const finish2 = document.querySelector(".item-finish2");
  const typeGame = document.querySelectorAll('[data-type="game"]');
  const plano = document.querySelector("[data-plano-ok]");
  let labelsPlans = document.querySelectorAll(".plans-items");
  const novoElemento = `
    <div class="option-item-finish">
                        <span class="item-finish">Larger storage</span>
                        <span class="item-finish2">+$20/yr</span>
                    </div>
  `;

  typeGame.forEach((game) => {
    game.addEventListener("click", (e) => {
      let divGame = e.currentTarget;
      let active = divGame.classList.contains("checkedStyle");
      switch (divGame) {
        case divGame:
          break;

        default:
          break;
      }
    });
  });

  labelsPlans.forEach((labelPlan) => {
    labelPlan.addEventListener("click", (e) => {
      let planoOk = e.currentTarget.children[1].innerHTML;
      console.log(typeGame);
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
