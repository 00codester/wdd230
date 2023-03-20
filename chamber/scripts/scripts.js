function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


const dateField = document.getElementById("currentDate");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

dateField.innerHTML = `${fulldate}`;


document.querySelector("#lastMod").textContent = `Last Modification: ${document.lastModified}`;

function displayMeetingBanner () {
    
}


// Display The Meeting Banner
const dMB = now.getDay();

if (dMB == 1 || dMB == 2){
    document.getElementById("meetingBanner").classList.toggle("open");
}

//autocomplete date and time form input
let objectDate = new Date();

//definitely got this part off the internet
var time = objectDate.toLocaleTimeString([], {
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit'
});

if (document.getElementById("autoTime") !== null && document.getElementById("autoDate") !== null) {
    document.getElementById("autoTime").value= time;
    document.getElementById("autoDate").valueAsDate = objectDate;
}
//lazy loading of Discover page

let getImages = document.querySelectorAll("img[data-src]");


const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    getImages.forEach((img) => {
        observer.observe(img);
    });
} else {
    getImages.forEach((img) => {
        loadImages(img);
    });
}

const lvDocument = document.querySelector(".lsVisits");

let lastVisit = Number(localStorage.getItem("lastVisit-ls"));

let today = new Date();
let todayM = Date.now(); //millis in a day = 86400000

if (lvDocument !== null) {
    if (lastVisit !== 0) {
        sinceVisited = (todayM - lastVisit) / 86400000;
        lvDocument.textContent = sinceVisited.toFixed(0);
    } else {
        lvDocument.textContent = `Welcome!`;
    }
}


localStorage.setItem("lastVisit-ls", todayM);

// const busjson = "data.json";

// async function getBusiness() {
//     const response = await fetch(busjson);
//     const data = await response.json();
//     //console.table(data.businesses);
//     indexBusinessDisplay(data.businesses)
// }

// getBusiness();

// function indexBusinessDisplay(businesses) {
//     let chosenNums =[];

//     while (chosenNums.length < 3) {
//         let randNum = Math.floor(Math.random()*9);
//         if (!chosenNums.includes(randNum)){
//             chosenNums.push(randNum);
//         }
//     }

//     const cards = document.getElementById("spotlight");
//     let i = 0;
//     chosenNums.forEach((number) => {
//         let card = document.createElement("div");
//         let h3 = document.createElement("h3");
//         let logo = document.createElement("img");
//         let address = document.createElement("p");
//         let busInfodiv = document.createElement("div");
//         let phone = document.createElement("p");
//         let website = document.createElement("p");
    
//         card.className = "spotHolder";
//         // console.log(chosenNums.length);
//         // console.log(number);
//         if (chosenNums.length -1 == i) {
//             card.setAttribute("id", "spot3");
//         }
//         i++;

//         h3.textContent = `${businesses[number].bname}`;

//         logo.setAttribute("src", businesses[number].logo);
//         logo.setAttribute("alt", `${businesses[number].bname} Logo`);

//         logo.setAttribute("width", "100");
//         logo.setAttribute("height", "100");


//         busInfodiv.className = "busInfo"; 

//         address.textContent = `${businesses[number].address}`;
//         phone.textContent =`${businesses[number].phone}`;
//         website.textContent = `${businesses[number].website}`;

//         busInfodiv.appendChild(address);
//         busInfodiv.appendChild(phone);
//         busInfodiv.appendChild(website);

//         card.appendChild(h3);
//         card.appendChild(logo);
//         card.appendChild(busInfodiv);

//         cards.appendChild(card);
//     });

// }