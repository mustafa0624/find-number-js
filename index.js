var counter = 0
let number = Math.ceil(Math.random()*100);
// console.log(typeof number)

document.getElementById("button").addEventListener("click",findNumber)
document.getElementById("input").addEventListener("keyup",Enter)

function findNumber() {
    
    
    let guess = document.getElementById("input").value

    if (isNaN(guess)) {
        document.getElementById("result").innerHTML = "Please enter only Numbers"
    }else if(guess > 100){
        document.getElementById("result").innerHTML =" Plese Maximum to 100"
    }else if(guess < 0){
        document.getElementById("result").innerHTML =" Plese higher than 0"
    }
    else if (guess < number) {
        document.getElementById("result").innerHTML = "I am thinking about higher number"
    } else if (guess > number) {
        document.getElementById("result").innerHTML = "I am thinking about lower number"
    }
    
     else {
        document.getElementById("result").innerHTML = "CONGRATULATIONS !!!"
    }

    counter++
    document.getElementById("test-number").innerHTML="This is your test number" + " " + counter

}

function Enter(a){
    if (a.keyCode===13){
        a.preventDefault() 
        document.getElementById("button").click()
    }


}

