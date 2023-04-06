if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount);
  } else {
    localStorage.clickcount = 0;
  }


  function freshDrinks() {
    let dsfar = document.getElementById("dsfar");
    dsfar.textContent = localStorage.getItem("clickcount");
  }

  freshDrinks();