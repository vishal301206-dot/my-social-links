
const googleCounterURL = "https://script.google.com/macros/s/AKfycbzBu_9-7de6n8ctiq76_8J4r2zyJFyW1xAuncPJx85fkLAuHrEZ9scsCcAdytkO0a2R/exec";

function showVisitorCount(data) {
    const counterElement = document.getElementById("visitorCount");

    if (counterElement && data && data.count !== undefined) {
        counterElement.textContent = data.count.toLocaleString();
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


