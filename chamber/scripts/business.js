const url = "data.json";

async function getBusiness() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);
    displayBusiness(data.businesses)
}

getBusiness();

const displayBusiness = (businesses) => {
    const cards = document.querySelector("div.card");
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let level = document.createElement("p");

        h2.textContent = `${business.bname}`;

        logo.setAttribute("src", business.logo);
        logo.setAttribute("alt", `${business.bname} Logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "100");
        logo.setAttribute("height", "100");

        address.innerHTML = `<span class="taglabel">Address:</span> ${business.address}`;
        phone.innerHTML = `<span class="taglabel">Phone #:</span> ${business.phone}`;
        website.innerHTML = `<span class="taglabel">Website:</span> ${business.website}`;
        level.innerHTML = `<span class="taglabel">Membership:</span> ${business.mlevel}`;

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
        
    });
}

const gridbutton = document.querySelector("#bgrid");
const listbutton = document.querySelector("#blist");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("bgrid");
	display.classList.remove("blist");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("blist");
	display.classList.remove("bgrid");
}


// let listStyle = document.querySelector(".listStyle").addEventListener("click", displayList);
// let picStyle = document.querySelector(".cardstyle").addEventListener("click", displayPics);

// function displayList(){

// }