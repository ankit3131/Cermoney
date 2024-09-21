document.addEventListener('DOMContentLoaded', function () {
let popupShow = document.getElementById("popup_show");
let menus = document.getElementById("menus");
popupShow.addEventListener("click", function(){
    debugger;
menus.style.display = "block";
})
let closed = document.getElementById("close");
closed.addEventListener("click" , function()

{
    menus.style.display = "none";
})
});