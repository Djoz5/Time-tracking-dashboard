const dayCard = document.querySelector('.day-div')
const weekCard = document.querySelector('.week-div')
const monthCard = document.querySelector('.month-div')

function dayBtn(){
    dayCard.style.display = "grid";
    weekCard.style.display = "none";
    monthCard.style.display = "none"
}
function weekBtn(){
    dayCard.style.display = "none";
    weekCard.style.display = "grid";
    monthCard.style.display = "none"
}
function monthBtn(){
    dayCard.style.display = "none";
    weekCard.style.display = "none";
    monthCard.style.display = "grid"
}