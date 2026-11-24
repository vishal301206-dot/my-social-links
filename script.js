
const googleCounterURL = "https://script.google.com/macros/s/AKfycbxXTHg3QI5YieEeppBzQWaNsGLtWwN7j_o3LS5nSj1A-0CXRSw43ri9dKW9FXxM57Xs/exec";

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


