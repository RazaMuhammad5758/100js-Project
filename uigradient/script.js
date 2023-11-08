const left = document.querySelector("#left")
const right = document.querySelector("#right")
const body = document.querySelector("body")
const leftCode = document.querySelector("#leftCode")
const rightCode = document.querySelector("#rightCode")
const h4 = document.querySelector("h4")
const rotate = document.querySelector(".rotate")

let position = "left"
let flag = 1



let color;
const randomClr =()=>{
    color="#"
    const hexChars = "0123456789ABCDEF";
    for(let i=0; i<6; i++){
        color += hexChars[Math.floor(Math.random()*hexChars.length)]

    }
    return color;
}
randomClr()


let color2;
const randomClr2 =()=>{
    color2="#"
    const hexChars = "0123456789ABCDEF";
    for(let i=0; i<6; i++){
        color2 += hexChars[Math.floor(Math.random()*hexChars.length)]

    }
    return color2;
}
randomClr2()


body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
leftCode.innerHTML=color
leftClr.style.backgroundColor=color
rightCode.innerHTML=color2
rightClr.style.backgroundColor=color2
h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`


right.addEventListener("click",()=>{
    
    randomClr()
    randomClr2()
    body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
    leftCode.innerHTML=color
    leftClr.style.backgroundColor=color
    rightCode.innerHTML=color2
    rightClr.style.backgroundColor=color2
    h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`
    
})
left.addEventListener("click",()=>{
    
    randomClr()
    randomClr2()
    body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
    leftCode.innerHTML=color
    leftClr.style.backgroundColor=color
    rightCode.innerHTML=color2
    rightClr.style.backgroundColor=color2
    h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`
    
})

rotate.addEventListener("click",()=>{
    
    if(flag===1){
        body.style.background=`linear-gradient(to left, ${color},  ${color2})`;
        h4.innerHTML=`CSS: background: linear-gradient(to left, ${color},  ${color2});`
        flag=0
        
    }
    else{
              body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
              h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`
              flag=1

          }
            
    

})
window.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowRight"){
    randomClr()
    randomClr2()
    body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
    leftCode.innerHTML=color
    leftClr.style.backgroundColor=color
    rightCode.innerHTML=color2
    rightClr.style.backgroundColor=color2
    h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`
    }
    if (e.key === "ArrowLeft"){
    randomClr()
    randomClr2()
    body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
    leftCode.innerHTML=color
    leftClr.style.backgroundColor=color
    rightCode.innerHTML=color2
    rightClr.style.backgroundColor=color2
    h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`
    }
    if (e.key === "ArrowUp"){
        if(flag===1){
            body.style.background=`linear-gradient(to left, ${color},  ${color2})`;
            h4.innerHTML=`CSS: background: linear-gradient(to left, ${color},  ${color2});`
            flag=0
            
        }
        else{
                  body.style.background=`linear-gradient(to right, ${color},  ${color2})`;
                  h4.innerHTML=`CSS: background: linear-gradient(to right, ${color},  ${color2});`
                  flag=1
    
              }
        
    }
})
// rotate.addEventListener("click",()=>{
//     body.style.background=`linear-gradient(to bottom, ${color},  ${color2})`;

// })

// i want to make hax color in which english alphabet should also uses but this code just use numbers to make color