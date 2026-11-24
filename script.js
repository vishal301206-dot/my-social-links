
// Google Apps Script URL
const googleCounterURL = "https://script.google.com/macros/s/AKfycbz3kBUGKqa1-31JeYPcBz6fn_IdlkmWHvXp6HPtTvJPXFn023DDHefIdBHRfDMbFsMa/exec";

function showVisitorCount(data) {
    const counterElement = document.getElementById("visitorCount");

    if (counterElement && data.count !== undefined) {
        counterElement.textContent =
            Number(data.count).toLocaleString();
    }
}
function showVisitorCount(data) {
    const counterElement = document.getElementById("visitorCount");

    if (counterElement) {
        if (data && data.count !== undefined) {
            counterElement.textContent =
                Number(data.count).toLocaleString();
        } else {
            counterElement.textContent = "Unavailable";
        }
    }
}

function loadVisitorCounter() {
    const script = document.createElement("script");

    script.src = googleCounterURL + "?callback=showVisitorCount";

    script.onerror = function () {
        document.getElementById("visitorCount").textContent =
            "Unavailable";
    };

    document.body.appendChild(script);
}

loadVisitorCounter();


