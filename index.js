var counter = 0
let number = Math.ceil(Math.random() * 100);

// console.log(typeof number)
const myInput=document.querySelector("#input");
document.getElementById("button").addEventListener("click", findNumber)
myInput.addEventListener("keyup", Enter)

function findNumber() {

    counter++


    let guess = Number(document.getElementById("input").value)

    if (guess === number) {
        
        // document.getElementById("result").innerHTML = "CONGRATULATIONS !!!"
        alert("CONGRATULATIONS !!!")
        const nextGame = confirm("do you wanna play again?")
        if (nextGame == true) {
            number = Math.floor((Math.random() * 100));
            counter = 0;
            document.getElementById("input").value = "";
            document.getElementById("test-number").innerHTML = "";
            document.getElementById("result").innerHTML = "";

        }
        else {
            document.getElementById("test-number").innerHTML = "";
            document.getElementById("result").innerHTML = "Thank you for the Game ";

        }
    }
    else if (isNaN(guess)) {
        document.getElementById("result").innerHTML = "Please enter only Numbers"
    } else if (guess > 100) {
        document.getElementById("result").innerHTML = " Plese Maximum to 100"
    } else if (guess < 0) {
        document.getElementById("result").innerHTML = " Plese higher than 0"
    }
    else if (guess < number) {
        document.getElementById("result").innerHTML = "I am thinking about higher number"
    } else if (guess > number) {
        document.getElementById("result").innerHTML = "I am thinking about lower number"
    }




    document.getElementById("test-number").innerHTML = "This is your test number" + " " + counter
    document.querySelector("#input").value = ""
    myInput.focus();
    
}

function Enter(a) {
    if (a.keyCode === 13) {
        a.preventDefault()
        document.getElementById("button").click()
    }


}



