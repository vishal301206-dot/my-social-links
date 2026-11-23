



const googleCounterURL = "https://script.google.com/macros/s/AKfycbxaOekWbbbcHVd9zV5PQMjOMIVPEjUcTUU6uhWYPfEQlx0SnMzmFZqTs1kQT4-0RYhw/exec";

function showVisitorCount(data) {
    const counterElement = document.getElementById("visitorCount");

    if (counterElement && data.count !== undefined) {
        counterElement.textContent = data.count.toLocaleString();
    }
}

function loadVisitorCounter() {
    const script = document.createElement("script");

    script.src = googleCounterURL + "?callback=showVisitorCount";
    document.body.appendChild(script);
}

loadVisitorCounter();
