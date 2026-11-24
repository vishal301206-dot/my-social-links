
// Google Apps Script URL
const googleCounterURL =
    "https://script.google.com/macros/s/AKfycbycWaitcbNJvPnC-eWEUJidJrjHMhRdKza_Ur78E8NJg0Ry1EE6YEY6fQS7EMGJxmTC/exec";

// Display visitor count
function showVisitorCount(data) {
    const counterElement = document.getElementById("visitorCount");

    if (!counterElement) return;

    const count = Number(data?.count);

    if (Number.isFinite(count) && count >= 0) {
        counterElement.textContent = count.toLocaleString();
    } else {
        counterElement.textContent = "Unavailable";
    }
}

// Load visitor counter
function loadVisitorCounter() {
    const counterElement = document.getElementById("visitorCount");

    if (!counterElement) return;

    counterElement.textContent = "Loading...";

    const callbackName = "__visitorCounterCallback";

    const script = document.createElement("script");
    script.id = "visitor-counter-script";

    window[callbackName] = function(data) {
        clearTimeout(window.visitorCounterTimer);

        showVisitorCount(data);

        script.remove();
        delete window[callbackName];
    };

    script.onerror = function() {
        clearTimeout(window.visitorCounterTimer);

        counterElement.textContent = "Unavailable";

        script.remove();
        delete window[callbackName];
    };

    script.src =
        googleCounterURL +
        "?callback=" + callbackName +
        "&_=" + Date.now();

    window.visitorCounterTimer = setTimeout(() => {
        counterElement.textContent = "Unavailable";

        script.remove();
        delete window[callbackName];
    }, 15000);

    document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", loadVisitorCounter);
