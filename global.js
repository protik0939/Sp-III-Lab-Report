const iframe = document.getElementById("mainIframe");

function loadIframeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "";
    const introContainer = document.getElementById("introContainer");
    const iframe = document.querySelector("iframe");

    if (page === "") {
        document.title = "SP-III Lab Report";
        introContainer.style.display = "flex";
    } else {
        iframe.src = `./LabReport/${page}.html`;
        introContainer.style.display = "none";
    }
}


function updatePage(page) {
    iframe.src = `./LabReport/${page}.html`;
    const newUrl = `${window.location.pathname}?page=${page}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    introContainer.style.display = "none";
}
iframe.onload = function () {
    const pageTitle = iframe.contentDocument.title;
    document.title = pageTitle ? `${pageTitle} | SP-III Lab Report` : "SP-III Lab Report";
};

document.getElementById("one").onclick = () => updatePage("lp1");
document.getElementById("two").onclick = () => updatePage("lp2");
document.getElementById("three").onclick = () => updatePage("lp3");
document.getElementById("four").onclick = () => updatePage("lp4");
document.getElementById("five").onclick = () => updatePage("lp5");

window.onload = loadIframeFromURL;

