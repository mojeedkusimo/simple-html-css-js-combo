// Listing of available pictures in an array

let imageSources = [
    'benin-ringroad.jpg',
    'lagos-bridge.jpg',
    'lagos-skyline.jpg',
    'national-theatre.jpg',
    'Jollof-spaghetti.jpg',
    'kano.jpg'
];

// Getting access to button and image element in the HTML document
let button = document.querySelector("button");
let imgTag = document.querySelector("img");

//Declaration of a counter variable
let counter = 1;

button.addEventListener("click", function() {
    if ( counter === 6 ) {
        counter = 0;
    }
    imgTag.src="./img/" + imageSources[counter];
    counter = counter + 1;

});