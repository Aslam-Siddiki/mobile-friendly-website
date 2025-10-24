let bar = document.querySelector(".fa-bars");
let sideBar = document.querySelector(".side-bar")

bar.addEventListener("click", ()=>{
    sideBar.classList.toggle("hidden");
});