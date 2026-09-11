// ==========================================
// AERIS DISASTER INTELLIGENCE DASHBOARD
// ==========================================


// ------------------------------------------
// SEARCH DETECTION DATABASE
// ------------------------------------------

const searchInput = document.getElementById("searchInput");
const detectionTable = document.getElementById("detectionTable");

searchInput.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    const rows = detectionTable.querySelectorAll("tr");

    rows.forEach(function (row) {

        const text = row.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});


// ------------------------------------------
// RESCUE ROUTE OPTIMIZATION
// ------------------------------------------

function optimizeRoute() {

    const message = document.getElementById("routeMessage");

    message.innerHTML =
        "Analysing survivor locations, hazards and route obstructions...";

    setTimeout(function () {

        message.innerHTML =
            "Recommended rescue route generated. Route prioritizes survivor cluster A while avoiding identified hazard zones.";

    }, 1500);

}


// ------------------------------------------
// SIMULATED LIVE DRONE DATA
// ------------------------------------------

let battery = 76;
let altitude = 84;
let speed = 42;
let coverage = 68;

function updateDroneData() {

    // Battery slowly decreases
    battery -= 0.02;

    if (battery < 0) {
        battery = 0;
    }

    // Small simulated movement
    altitude += (Math.random() - 0.5) * 2;

    speed += (Math.random() - 0.5) * 2;

    if (speed < 30) {
        speed = 30;
    }

    if (speed > 50) {
        speed = 50;
    }


    document.getElementById("battery").textContent =
        Math.round(battery) + "%";

    document.getElementById("altitude").textContent =
        Math.round(altitude) + " m";

    document.getElementById("speed").textContent =
        Math.round(speed) + " km/h";

}


// Update every 3 seconds
setInterval(updateDroneData, 3000);


// ------------------------------------------
// SEARCH COVERAGE SIMULATION
// ------------------------------------------

function updateCoverage() {

    if (coverage < 100) {

        coverage += 0.1;

        document.getElementById("coverage").textContent =
            Math.round(coverage) + "%";

        document.getElementById("areaMapped").textContent =
            Math.round(coverage) + "%";

        document.getElementById("progressText").textContent =
            Math.round(coverage) + "%";

        document.getElementById("progressBar").style.width =
            coverage + "%";
    }

}

setInterval(updateCoverage, 5000);


// ------------------------------------------
// LIVE TIME
// ------------------------------------------

function updateTime() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const time = hours + ":" + minutes;

    const rows = detectionTable.querySelectorAll("tr");

    // This keeps the dashboard visually active
    document.title = "AERIS | LIVE • " + time;
}

setInterval(updateTime, 1000);


// ------------------------------------------
// SIDEBAR ACTIVE LINK
// ------------------------------------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});