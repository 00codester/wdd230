const url =`https://brotherblazzard.github.io/canvas-content/fruit.json`;
let apiData = "";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        apiData = data;
        displayResults(data);
        //console.log(apiData);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(fruitData){
    let fruit1options = document.getElementById("fruit1");
    let fruit2options = document.getElementById("fruit2");
    let fruit3options = document.getElementById("fruit3");
    let i = 0;
    while ( i < fruitData.length  ){
        let fruitname = fruitData[i].name;
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        let option3 = document.createElement("option");
        option1.value = fruitname;
        option2.value = fruitname;
        option3.value = fruitname;
        option1.textContent = fruitname;
        option2.textContent = fruitname;
        option3.textContent = fruitname;

        fruit1options.appendChild(option1);
        fruit2options.appendChild(option2);
        fruit3options.appendChild(option3);

        i++;
    }
}

apiFetch();


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
    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calorie = 0;

    const date = new Date();
    const orderdate = date.toDateString();

    apiData.forEach(element => {
        if (element.name == fruit1) {
            carbs += Number(element.nutritions.carbohydrates);
            protein += Number(element.nutritions.protein);
            fat += Number(element.nutritions.fat);
            sugar += Number(element.nutritions.sugar);
            calorie += Number(element.nutritions.calories);
        }   
        if (element.name == fruit2) {
            carbs += Number(element.nutritions.carbohydrates);
            protein += Number(element.nutritions.protein);
            fat += Number(element.nutritions.fat);
            sugar += Number(element.nutritions.sugar);
            calorie += Number(element.nutritions.calories);
        } 
        if (element.name == fruit3) {
            carbs += Number(element.nutritions.carbohydrates);
            protein += Number(element.nutritions.protein);
            fat += Number(element.nutritions.fat);
            sugar += Number(element.nutritions.sugar);
            calorie += Number(element.nutritions.calories);
        }  
    });


    if (pname !== "" && email !== "" && phone !== "" && fruit1 !== "default" && fruit2 !== "default" && fruit3 !== "default") {
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
        let lidate = document.createElement("li");
        let licarb = document.createElement("li");
        let liprotein = document.createElement("li");
        let lifat = document.createElement("li");
        let lisugar = document.createElement("li");
        let licalorie = document.createElement("li");

        let ul = document.createElement("ul");
        lidate.textContent = orderdate;
        ul.appendChild(lidate);

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
        
        
        licarb.textContent = `Total Carbohydrates: ${carbs.toFixed(1)}`;
        liprotein.textContent = `Total Protein: ${protein.toFixed(1)}`;
        lifat.textContent = `Total Fat: ${fat.toFixed(1)}`;
        lisugar.textContent = `Total Sugar: ${sugar.toFixed(1)}`;
        licalorie.textContent = `Total Calories: ${calorie.toFixed(0)}`;
        
        ul.appendChild(licarb);
        ul.appendChild(liprotein);
        ul.appendChild(lifat);
        ul.appendChild(lisugar);
        ul.appendChild(licalorie);


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

