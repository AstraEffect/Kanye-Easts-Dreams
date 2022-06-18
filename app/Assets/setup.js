var app = {
    navBar: document.getElementById("navBar"),
    content: document.getElementById("content")
}


window.onload = function(){
    app.navBar.width = 60;
    app.navBar.height = innerHeight - 20;
    app.content.height = innerHeight - 20;
    app.content.width = innerWidth - 90;
}
window.onresize = function(){
    app.content.height = innerHeight - 20;
    app.navBar.height = innerHeight - 20;
    app.content.width = innerWidth - 90;
};