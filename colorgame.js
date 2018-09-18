let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let reset = document.querySelector('#reset');
let mode = document.querySelectorAll('.mode');

init();

function init(){
    for (let i = 0; i < mode.length; i++){
        mode[i].addEventListener('click', function() {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            resetAll();
            //fnd out number of squares
            // pick new colors
            //pick the pickedColor
            //change the colors in squares
        });
    };
    
    for (let i = 0; i < squares.length; i++) {
        //Eventlisteners for thes quares
        squares[i].addEventListener('click', function() {
            let clickedColor = this.style.backgroundColor;
            //Compare color to answer
            if  (clickedColor === pickedColor) {
                message.textContent = 'Correct!';
                reset.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = 'Try Again';
            }
        })
    };

    resetAll();
}


function resetAll(){
     // generate new colors
     colors = generateColors(numberOfSquares);
     // pick new color
     pickedColor = colorRandom();
     colorDisplay.textContent = pickedColor;
     // change the colors
     for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
     }
     h1.style.backgroundColor = "steelBlue";
     reset.textContent = "New Colors";
     message.textContent = "";
}

reset.addEventListener('click', function() {
    resetAll();
});


changeColors = color => {
    //loop through squares
    for (let i = 0; i < squares.length; i++) {
        //Cahnge each color to match correct answer
        squares[i].style.backgroundColor = color;
    }
};

function colorRandom()  {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateColors(num) {
    //Array
    let arr = [];
    //Add (num) random colors
    for (let i = 0; i < num; i++) {
        //get a random color
        //push to array
        arr.push(randomizer());
    }
    //return that array
    return arr;
}

function randomizer() {
    //randomize R G B
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}