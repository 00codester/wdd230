function createReceipt () {
    let receipt = document.getElementById("drinkOrder");
    receipt.textContent = "";

    const pname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const fruit1 = document.getElementById("fruit1").value;
    const fruit2 = document.getElementById("fruit2").value;
    const fruit3 = document.getElementById("fruit3").value;
    const extra = document.getElementById("instructions").value;

    // console.log(pname);
    // console.log(email);
    // console.log(phone);
    // console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);
    // console.log(extra);
    

    if (pname !== "" && email !== "" && phone !== "") {
        let h3 = document.createElement("h3");
        h3.textContent = "Receipt:";
        receipt.appendChild(h3);
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let li5 = document.createElement("li");
        let li6 = document.createElement("li");
        let li7 = document.createElement("li");

        let ul = document.createElement("ul");
        li1.textContent = pname;
        ul.appendChild(li1);
        li2.textContent = email;
        ul.appendChild(li2);
        li3.textContent = phone;
        ul.appendChild(li3);
        li4.textContent = fruit1;
        ul.appendChild(li4);
        li5.textContent = fruit2;
        ul.appendChild(li5);
        li6.textContent = fruit3;
        ul.appendChild(li6);
        li7.textContent = extra;
        ul.appendChild(li7);

        receipt.appendChild(ul);

        let freshform = document.getElementById("freshform");
        freshform.reset();

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
          } else {
            localStorage.clickcount = 1;
          }
    }
}

document.getElementById("clicked").addEventListener("click", createReceipt);