const NumInput = document.querySelector(".inp-number")
const submit=document.querySelector(".submit")
const plus = document.querySelector(".plus")
const minus=document.querySelector(".minus")
const h1 =document.querySelector("h1")
const ColorPic=document.querySelector(".color-pic")

h1.textContent=0

submit.addEventListener("click", ()=> {
    h1.textContent=NumInput.value
})

plus.addEventListener("click", ()=> {
    h1.textContent++
})


minus.addEventListener("click", ()=> {
    h1.textContent--
})


ColorPic.addEventListener("input", ()=> {
    h1.style.color=ColorPic.value
})