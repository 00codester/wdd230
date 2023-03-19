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

