// Animated Text JS Starts From Here ->
window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





// My JS Starts From Here (Bhavishaya Khandelwal)

let goForward = 0;
let ct = 1;
const changeText = (getNumber) => {
    if(ct == 1) {
        let textSpan = document.getElementById("spanText");
        textSpan.classList.remove("d-none");
        textSpan.classList.add("d-inline-block");
        ct++;
    }
    if(getNumber == 1) {
        document.getElementById("displayAmount").innerText = `from $9.99`;
        document.getElementById("spanText").innerText = `$14.99`;
        goForward = 1;
        (document.getElementById(getNumber)).style.backgroundColor = "#FFC700";
        (document.getElementById("2")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("4")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("6")).style.backgroundColor = "#F4F4F3";
    }
    else if(getNumber == 2) {
        document.getElementById("displayAmount").innerText = `from $14.99`;
        document.getElementById("spanText").innerText = `$24.99`;
        goForward = 1;
        (document.getElementById(getNumber)).style.backgroundColor = "#FFC700";
        (document.getElementById("1")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("4")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("6")).style.backgroundColor = "#F4F4F3";
    }
    else if(getNumber == 4) {
        document.getElementById("displayAmount").innerText = `from $32.99`;
        document.getElementById("spanText").innerText = `$44.99`;
        goForward = 1;
        (document.getElementById(getNumber)).style.backgroundColor = "#FFC700";
        (document.getElementById("1")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("2")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("6")).style.backgroundColor = "#F4F4F3";
    }
    else {
        document.getElementById("displayAmount").innerText = `from $49.99`;
        document.getElementById("spanText").innerText = `$59.99`;
        goForward = 1;
        (document.getElementById(getNumber)).style.backgroundColor = "#FFC700";
        (document.getElementById("1")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("2")).style.backgroundColor = "#F4F4F3";
        (document.getElementById("4")).style.backgroundColor = "#F4F4F3";
    }
} 



// Logic 
// if(goForward == 1) {
//     then only we are able to click on add to cart button 
//     else  
//     show alert("Please select size to go forward");
// }

const addingToCart = () => {
    if(goForward == 1) {
        let stopAdding = setInterval(() => {
            document.getElementById("addToCart").innerText = "Adding...";
            // document.getElementById("addToCart").style.backgroundColor = "#000000";
            // document.getElementById("addToCart").style.color = "#F4F4F3";
        }, 500);
        let clearAdding = setTimeout(() => {
            clearInterval(stopAdding);
             let stopAdded =  setInterval(() => {
                document.getElementById("addToCart").innerText = "Added!";
            }, 500);

            
            // Changing Cart Value 
            let cartCurrValue = document.getElementsByClassName("cartValue")[0].innerText;
            let cartCurrValue2 = document.getElementsByClassName("cartValue")[1].innerText;
            cartCurrValue = parseInt(cartCurrValue);
            cartCurrValue2 = parseInt(cartCurrValue2);
            let quantityNeeded = document.getElementById("getQuantity").value;
            quantityNeeded = parseInt(quantityNeeded);
            cartCurrValue += quantityNeeded;
            cartCurrValue2 += quantityNeeded;
            document.getElementsByClassName("cartValue")[0].innerText = cartCurrValue;
            document.getElementsByClassName("cartValue")[1].innerText = cartCurrValue2;


            let clearAdded = setTimeout(() => {
                clearInterval(stopAdded);
                document.getElementById("addToCart").innerText = "ADD TO CART";
            }, 3000);
        }, 3000);
    }
    else {
        alert("Please select size to proceed forward");
    }
}