let inp = document.querySelector("#inp")
let body = document.querySelector("body")



inp.addEventListener("input" , (e)=>{
    body.style.backgroundColor=inp.value
})