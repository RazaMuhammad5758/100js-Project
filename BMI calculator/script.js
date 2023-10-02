const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()


    
    const h = parseInt(document.querySelector("#height").value)
    const w = parseInt(document.querySelector("#weight").value)
    // const btn = document.querySelector("#btn")
    const optone = document.querySelector("#selectone").value
    const opttwo = document.querySelector("#selecttwo")
    
    if (w === "" || isNaN(w) || w<=0) {
        alert("Enter Your Weight correctly")
    }
    if (h === "" || isNaN(h) || h<=0) {
        alert("Enter Your Height correctly")
    }
    if(optone==="m"){
        const bmi = (w/(h*h))
        const r = document.querySelector("#result")
        r.innerHTML= bmi
    }
    if(optone==="ft"){
        const bmi = (w/((h*h)*(0.3048*0.3048))).toFixed(3)
        const r = document.querySelector("#result")
        r.innerHTML= bmi
    }
    if(optone==="inch"){
        const bmi = (w/((h*h)*(0.0254*0.0254))).toFixed(3)
        const r = document.querySelector("#result")
        r.innerHTML= bmi
    }
    else{
            const bmi = (w/((h*h)/10000)).toFixed(3)
            const r = document.querySelector("#result")
            r.innerHTML= bmi
            console.log(bmi);
        }
})
