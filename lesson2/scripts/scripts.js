const footerContent = document.querySelector("#footerinfo");
const d = new Date(document.lastModified);

let dateDay = d.getDay();
let dateYear = d.getFullYear();
let dateMonth = d.getMonth() + 1;

if (dateMonth < 10) {
    dateMonth = `0${dateMonth}`;
}

if (dateDay < 10) {
    dateDay = `0${dateDay}`;
}

let dateHours = d.getHours();
let dateMinutes = d.getMinutes();
let dateSeconds = d.getSeconds();
let dateTime = `${dateHours}:${dateMinutes}:${dateSeconds}`;

let fullDate = `${dateMonth}/${dateDay}/${dateYear}`


//document.querySelector("#copyrightLine").innerHTML = "<p>&copy;2023 .:|:. Cody C. Karl .:|:. Utah</p>";
footerContent.innerHTML = "<p>&copy; 2023 | Cody C. Karl | Last Updated: " + fullDate + " " + dateTime + "</p>";