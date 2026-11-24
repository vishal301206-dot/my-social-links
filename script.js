
// Google Apps Script URL
const googleCounterURL = "https://script.google.com/macros/s/AKfycbycWaItcbNJvPnC-eWEUJidJrjHMhRdKza_Ur78E8NJg0Ry1EE6YEY6fQS7EMGJxmTC/exec";

// Display visitor count
function showVisitorCount(data) {
    const counterElement = document.getElementById("visitorCount");

    if (!counterElement) return;

    if (data && data.count !== undefined) {
        counterElement.textContent =
            Number(data.count).toLocaleString();
    } else {
        counterElement.textContent = "Unavailable";
    }
}

// Load visitor counter
function loadVisitorCounter() {
    const counterElement = document.getElementById("visitorCount");

    if (!counterElement) return;

    const script = document.createElement("script");

    script.src = googleCounterURL + "?callback=showVisitorCount";

    const timeout = setTimeout(() => {
        counterElement.textContent = "Unavailable";
        script.remove();
    }, 10000);

    const originalCallback = showVisitorCount;

    window.showVisitorCount = function(data) {
        clearTimeout(timeout);
        originalCallback(data);
        script.remove();
    };

    script.onerror = function() {
        clearTimeout(timeout);
        counterElement.textContent = "Unavailable";
        script.remove();
    };

    document.body.appendChild(script);
}

loadVisitorCounter();
