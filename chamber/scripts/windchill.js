function GetWindChill(){
    const temp = parseInt(document.getElementById("temp").textContent);
    const speed = parseInt(document.getElementById("wspeed").textContent);
    const dchill = document.getElementById("chill");

    const windchill = 35.74 + 0.6215 * speed - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    const smallwc = windchill.toFixed(1);
    console.log(temp);
    console.log(speed);
    console.log(windchill);
    if(temp <= 50 && speed > 3){
        dchill.innerHTML = smallwc + "&#8457;";
    }
    else{
        dchill.textContent = "N/A";
    }
}

GetWindChill();