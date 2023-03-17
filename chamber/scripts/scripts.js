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

document.getElementById("autoTime").value= time;
document.getElementById("autoDate").valueAsDate = objectDate;