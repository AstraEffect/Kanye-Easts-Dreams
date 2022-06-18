loadInfo = document.getElementById("loadInfo");
let userId = 'UYMUKJSSDNUUO7BYTW5QL4M9SM3RW9TAW92TV3KK'
// let userId = document.cookie;     <--- use this in production

function verifyUser() {
    loadInfo.innerHTML = "verifying Id";

}

if (userId != '') {
    verifyUser();
} else {
    loadInfo.innerHTML = "No id found";
    alert("No id found");
}
