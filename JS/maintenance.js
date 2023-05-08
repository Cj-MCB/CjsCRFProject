var pg=0;
function openPage(value) {
    pg = value;
    console.log("Page", pg, "on maintenance.html");
    const showpg = document.getElementById("showPage");
    showpg.style.visibility = "visible";
    showpg.innerHTML = '<object id="showpg" data="/media/manualRefrences/pdf/'+pg+'.pdf" type="application/pdf"></object>';
}

function closePage() {
    const showpg = document.getElementById("showPage");
    showpg.style.visibility = "hidden";
}