
console.log("Social Links Website Loaded!");

// Generate QR Code
const websiteURL = "https://vishal301206-dot.github.io/my-social-links/";

const qrContainer = document.getElementById("qrcode");

if (qrContainer && typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
        text: websiteURL,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Download QR Code
document.getElementById("downloadQR").addEventListener("click", function () {
    const canvas = qrContainer.querySelector("canvas");
    const img = qrContainer.querySelector("img");

    let imageURL;

    if (canvas) {
        imageURL = canvas.toDataURL("image/png");
    } else if (img && img.src) {
        imageURL = img.src;
    } else {
        alert("QR Code is not ready yet!");
        return;
    }

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "Vishal-Social-QR.png";
    link.click();
});


async function updateVisitorCount() {
    const counterElement = document.getElementById("visitorCount");

    if (!counterElement) return;

    try {
        const response = await fetch(
            "https://api.counterapi.dev/v1/vishal301206-dot/my-social-links/up"
        );

        if (!response.ok) {
            throw new Error("Counter service unavailable");
        }

        const data = await response.json();

        counterElement.textContent = data.count.toLocaleString();
    } catch (error) {
        console.error("Visitor counter error:", error);
        counterElement.textContent = "Unavailable";
    }
}

updateVisitorCount();
