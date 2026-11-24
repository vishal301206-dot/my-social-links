
const googleCounterURL = "https://script.google.com/macros/s/AKfycbyUWQnNPYN7K6-Y2MnKKdLokOoFDu5h3NKF0baeteoxrwdbCspXPnb81fjKEEqaNHOJ/exec";

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


