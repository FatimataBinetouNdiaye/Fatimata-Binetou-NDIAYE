var x= document.getElementById("num1")
var y= document.getElementById("num2")
const btn = document.getElementById("far")

btn.addEventListener("click",()=>{
nb1 = x.value
nb2 = y.value
nb1 = parseFloat(nb1)
nb2 = parseFloat(nb2)
    plus = nb1 + nb2
    document.getElementById("add").innerHTML = "laddition est de x+y = " + plus   
    multi= nb1 *nb2
    document.getElementById("sis").innerHTML = "la multiplication est x*y = " + multi 
    divi= nb1/nb2  
    document.getElementById("rat").innerHTML = "la division  est de x/y = " + divi  
    mod= nb1%nb2
    document.getElementById("tar").innerHTML = "laddition est de x%y = " + mod   
})

