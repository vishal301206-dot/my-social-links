
const googleCounterURL = "https://script.google.com/macros/s/AKfycbx_452FD-ahunqfuMoatNotgJ2WVYqlxyRpC8OSSwVuOROwgC7tsrIB9ZVMdt1tKfRk/exec";

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
