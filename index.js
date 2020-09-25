var counter = 0
let number = Math.ceil(Math.random() * 100);

// console.log(typeof number)

document.getElementById("button").addEventListener("click", findNumber)
document.getElementById("input").addEventListener("keyup", Enter)

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

}

function Enter(a) {
    if (a.keyCode === 13) {
        a.preventDefault()
        document.getElementById("button").click()
    }


}




// let nr_game;
// let counter = 0;

// let number = Math.floor((Math.random() * 100) + 1);

// document.getElementById("check_it").addEventListener("click", function () {

//     check_number();
// });

// document.getElementById("nr_game").addEventListener("keyup", function (event) {
//     if (event.which === 13) {
//         check_number();

//     }
// });

// function check_number() {
//     counter++;
//     document.getElementById("count_it").innerHTML = "This is your test number:" + counter;

//     nr_game = document.getElementById("nr_game").value;
//     if (nr_game == number) {

//         alert("You are the winner :D. " + "You guest after" + (counter--) + " times!");

//         var next_game = confirm("You wanna play again?");
//         if (next_game == true) {
//             number = Math.floor((Math.random() * 100) + 1);
//             counter = 0; document.getElementById("answer").innerHTML = "";
//             document.getElementById("count_it").innerHTML = "";
//         }
//         else {
//             document.getElementById("count_it").innerHTML = "";
//             document.getElementById("answer").innerHTML = "Thanks for game!";

//         }
//     }

//     else if (nr_game == "") {
//         document.getElementById("answer").innerHTML = "Weite the number";
//     }
//     else if (nr_game.indexOf(',') != -1 || nr_game.indexOf('.') != -1) {
//         document.getElementById("answer").innerHTML = "This is NOT a natural number";
//     }

//     else if (nr_game > number) {
//         document.getElementById("answer").innerHTML = "I am thinking about lower number";
//     }
//     else if (nr_game < number) {
//         document.getElementById("answer").innerHTML = "I am thinking about higher number";
//     }
//     else if (isNaN(nr_game)) {
//         document.getElementById("answer").innerHTML = "Are you sure that this is a number?";
//     }

//     document.getElementById("nr_game").value = '';
//     document.getElementById("nr_game").focus();
// }
