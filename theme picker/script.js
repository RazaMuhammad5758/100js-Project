let body = document.querySelector("body")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let code = document.querySelector("#clrCode")
let next = document.querySelector("#next")

let color;
let intervalId;
const randomClr = ()=>{
    color = "#"
    for ( let i=0; i<6; i++){
        color = color+ Math.floor(Math.random()*9)

    }
    return color
}
randomClr()

const bgChanger=()=>{
    body.style.backgroundColor=randomClr()
    code.innerHTML=color
}

start.addEventListener('click',()=>{
      intervalId = setInterval(bgChanger, 2000)
      start.style.color='white'
      start.style.border='1px solid white'
      stop.style.color='white'
      stop.style.border='1px solid white'
})

stop.addEventListener("click", ()=>{
    clearInterval(intervalId)
    
})
next.addEventListener("click", ()=>{
    body.style.backgroundColor=randomClr()
    code.innerHTML=color
})