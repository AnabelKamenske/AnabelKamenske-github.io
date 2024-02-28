// JavaScript source code

console.log("java file connected successfully")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const div =document.querySelector("#welcome")

if ( isMorning) {
    div.innerHTML= "Hello Goood Morning!"
console.log("morning");
}
else if (isAfternoon){
div.innerHTML= "Hello Goood Afternoon!"
console.log("afternoon");
}
else if(isEvening){
    div.innerHTML= "Hello Goood Evening!"
console.log("evening");
}


const p= document.querySelector('#Secret')

const button = document.querySelector('button')
button.addEventListener('click',()=>{
    var password = document.querySelector('input').value
    localStorage.setItem('password', JSON.stringify(password))

const display = password =>{
        const span = document.createElement('span')
        span.textContent= password
        p.append(span)
    }

    if (password == "It's a secret to everybody."){
    console.log("password Correct")
    password= "Secret TUNELLLLLLL - The Blind Moles from Avatar the Last Airbender"

    display(password)
    }
    else{
    console.log("password Incorrect")
    password ="Incorrect Password"

    display(password)
    }
    
    
})

