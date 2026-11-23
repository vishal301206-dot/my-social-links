
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


// Social Media Share Feature

const profileURL = window.location.href;

const message = "Check out my Social Links Profile! 🚀";

// WhatsApp
document.getElementById("whatsappShare").href =
    "https://api.whatsapp.com/send?text=" +
    encodeURIComponent(message + " " + profileURL);

// Facebook
document.getElementById("facebookShare").href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(profileURL);

// LinkedIn
document.getElementById("linkedinShare").href =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent(profileURL);

// Telegram
document.getElementById("telegramShare").href =
    "https://t.me/share/url?url=" +
    encodeURIComponent(profileURL) +
    "&text=" + encodeURIComponent(message);

// X (Twitter)
document.getElementById("twitterShare").href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(message) +
    "&url=" + encodeURIComponent(profileURL);

// Copy Website Link
document.getElementById("copyShareLink")
    .addEventListener("click", async function () {

        try {
            await navigator.clipboard.writeText(profileURL);
            alert("Website link copied successfully! 🎉");
        } catch (error) {
            alert("Please copy the website link manually.");
        }

    });
