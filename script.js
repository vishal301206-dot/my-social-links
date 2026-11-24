
const googleCounterURL = "https://script.google.com/macros/s/AKfycbxDGKN9l3uvRrbhOy8nN_NM4nNb6dd--ZhfDF-8Q8All2QiHcbVYJRKARsEVXGV79fM/exec";

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


