setInterval(() => {
    // let d = new Date();
    let d = new Date();
    updateClock(d);
}, 1000);

//Aggiorniamo l'orologioo
function updateClock(date) {
    let hours = date.getHours();
    let twelveHour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let minutes = date.getMinutes();

    //Indicatore dell'ora
    setHour(date, twelveHour);

    //Indicatore dei minuti
    setMinutes(date, minutes, twelveHour);

    //AM o PM?
    setAMPM(date, hours);
}

function setHour(date, hours) {
    let am = date.getHours() < 13;

    let spans = document.getElementsByClassName("hs");
    Array.from(spans).forEach(hspan => {
        hspan.classList.remove("light");
    });

    if (hours != 0 || hours != 1) {
        let hl = document.getElementById("hl");
        let hourSpan = document.getElementById("h" + hours);
        hl.classList.add("light");
        hourSpan.classList.add("light");
    }
    else if (hours == 1) {
        let h13 = document.getElementById("h13");
        h13.classList.add("light");
    }
    else if (hours == 0 && am) {
        let h0 = document.getElementById("h0");
        h0.classList.add("light");
    }
}

function setMinutes(date, minutes, twelveHour) {
    let spans = document.getElementsByClassName("hm");
    Array.from(spans).forEach(hspan => {
        hspan.classList.remove("light");
    });

    let availableMinutes = [60, 45, 30, 15, 0];
    let minuteToChoose = 0;

    availableMinutes.forEach(availableMinute => {
        if (availableMinute >= minutes) {
            minuteToChoose = availableMinute;
        }
    });

    let minuteSpan = document.getElementById("m" + minuteToChoose);
    minuteSpan.classList.add("light");

    //Se "meno un quarto" dobbiamo mostrare un'ora in più
    if (minuteToChoose == 60) {
        setHour(date, twelveHour + 1);
    }
}

function setAMPM(date, hours) {
    let am = document.getElementById("am");
    let pm = document.getElementById("pm");

    if (hours < 13) {
        am.classList.add("light");
        pm.classList.remove("light");
    }
    else {
        am.classList.remove("light");
        pm.classList.add("light");
    }
}