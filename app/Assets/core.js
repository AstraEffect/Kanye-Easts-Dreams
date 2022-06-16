var input = {
    dmParent: document.getElementById("dmParent"),
    dm: document.getElementById("dm")
};
let dmInput = "";
let dmOutput = "";
let curMes = 0;

function handleForm(event) { event.preventDefault(); dmProcess();} 
dmParent.addEventListener('submit', handleForm);

window.onload = function() {
    input.dmParent.style.paddingTop = innerHeight - 45 + "px";
}
window.onresize = function() {
    input.dmParent.style.paddingTop = innerHeight - 45 + "px";
}

function dmProcess() {
    dmInput = input.dm.value;
    dmOutput = document.getElementById("dmOutput");
    dmOutput.innerHTML = dmInput;
    let newMes = "mes" + curMess;
    let newMesDiv = document.createElement("p");

}