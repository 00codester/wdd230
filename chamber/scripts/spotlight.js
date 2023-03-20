const busjson = "data.json";

async function getBusiness() {
    const response = await fetch(busjson);
    const data = await response.json();
    //console.table(data.businesses);
    indexBusinessDisplay(data.businesses)
}

getBusiness();

function indexBusinessDisplay(businesses) {
    let chosenNums =[];

    while (chosenNums.length < 3) {
        let randNum = Math.floor(Math.random()*9);
        if (!chosenNums.includes(randNum)){
            chosenNums.push(randNum);
        }
    }

    const cards = document.getElementById("spotlight");
    let i = 0;
    chosenNums.forEach((number) => {
        let card = document.createElement("div");
        let h3 = document.createElement("h3");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let busInfodiv = document.createElement("div");
        let phone = document.createElement("p");
        let website = document.createElement("p");
    
        card.className = "spotHolder";
        // console.log(chosenNums.length);
        // console.log(number);
        if (chosenNums.length -1 == i) {
            card.setAttribute("id", "spot3");
        }
        i++;

        h3.textContent = `${businesses[number].bname}`;

        logo.setAttribute("src", businesses[number].logo);
        logo.setAttribute("alt", `${businesses[number].bname} Logo`);

        logo.setAttribute("width", "100");
        logo.setAttribute("height", "100");


        busInfodiv.className = "busInfo"; 

        address.textContent = `${businesses[number].address}`;
        phone.textContent =`${businesses[number].phone}`;
        website.textContent = `${businesses[number].website}`;

        busInfodiv.appendChild(address);
        busInfodiv.appendChild(phone);
        busInfodiv.appendChild(website);

        card.appendChild(h3);
        card.appendChild(logo);
        card.appendChild(busInfodiv);

        cards.appendChild(card);
    });

}