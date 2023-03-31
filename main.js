function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image".padStart('src',profile.getImageUr()));
    $(".data").css("display","block");
    $(".g-signin2").css("display", "none");

}
function signOut(){
    var auth2 = gapi.auth2.getAuthInstace();
    auth2.signOut().then(function(){
alert("you have been signed out successfully");
$(".g-signin2").css("display", "block");
$(".data").css("display","none");

    });
}









// const email = document.getElementById("email")
// const pass = document.getElementById("password")
// const form = document.getElementById("form")
// const parrafo = document.getElementById("warnings")
// const inputSearch = document.getElementById("search")

// form.addEventListener("submit", e=> {
//     e.preventDefault()
//     let warnings = ""
//     let entrar = false
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     box.innerHTML = ""
//     if(nombre.value.length <6){
//         warnings += `El nombre no es valido <br>`
//         entrar = true
//     }
// if(!regexEmail.test(email.value)){
//     warnings += `El email es valido <br>`
// entrar = true
// }

// if(pass.value.length < 8){
//     warnings += `La comtraseña no es valido <br>`
//     entrar = true

// }
// })

// //Buscador

// function buscador (){
//     filter = inputSearch.value.toUpperCase();
// }
