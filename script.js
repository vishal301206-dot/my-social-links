

function doGet(e) {
  const properties = PropertiesService.getScriptProperties();
  let count = Number(properties.getProperty("visitors") || 0);

  count++;
  properties.setProperty("visitors", count);

  const callback = e.parameter.callback || "callback";
  const output = callback + "(" + JSON.stringify({count: count}) + ");";

  return ContentService
    .createTextOutput(output)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}


const googleCounterURL = "https://script.google.com/macros/s/AKfycbzLheP9UVnb7gZtviIpgp7LR8RBDErbqKB4EMh6VRlIWjlPic0Khi58943RNhQLF18s/exec";

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
