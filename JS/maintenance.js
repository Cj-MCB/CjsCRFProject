var pg=0;

function openPage(value) {
    pg = value;
    console.log("Page", pg, "on maintenance.html");
    const showpg = document.getElementById("showPage");
    showpg.innerHTML = '<object id="showpg" data="/media/manualRefrences/png/'+pg+'.png" type="application/pdf"></object>';
    showpg.style.visibility = "visible";
}

function closePage() {
    const showpg = document.getElementById("showPage");
    showpg.style.visibility = "hidden";
}