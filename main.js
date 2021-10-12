/* let changeImg = document.getElementsByTagName("img");
changeImg.src = "http://boolean.careers/images/misc/logo.png";

/* console.log(changeImg)  */
const hamburgerBtn = document.getElementsByClassName("fas fa-bars")[0];
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const closeHamburgerMenu = document.getElementsByClassName("fas fa-times")[0];
/* console.log(hamburgerMenu) */
/* console.log(closeHamburgerMenu) */

hamburgerBtn.addEventListener("click", function(){

    hamburgerMenu.style.display = "block";
});

closeHamburgerMenu.addEventListener("click", function(){

    hamburgerMenu.style.display = "none";
})

/* const hamburgerBtn = document.querySelector("header .header-right .fa-bars").parentElement;
così recuperiamo il tag a che è il padre di fa-bars */