// Step 1: Creating index.js and Connecting it to HTML

console.log("hello world")

const message = document.querySelector('#message');

// Step 2: Creating the addMovie Function

function addMovie(event){

event.preventDefault() // Prevent default form submission behavior

const inputField = document.querySelector('input');


if (inputField.value === '') {
    alert('Please enter a movie name!');
    return; // Exit function if input is empty
}

const movie = document.createElement('li')
const movieTitle = document.createElement('span')

movieTitle.textContent = inputField.value;

movieTitle.addEventListener('click', crossOffMovie)

movie.appendChild(movieTitle);

const deleteBtn = document.createElement('button');

deleteBtn.textContent = 'X';

deleteBtn.addEventListener('click', deleteMovie)

movie.appendChild(deleteBtn);

document.querySelector('ul').appendChild(movie);

inputField.value = '';

}

document.querySelector('form').addEventListener("submit", addMovie)

// step 3: Creating the deleteMovie Function

function deleteMovie (event){
    const deletedMovieTitle = event.target.previousElementSibling.textContent;
    event.target.parentNode.remove();
    message.textContent = `${deletedMovieTitle} deleted!`;

    revealMessage();
}


// Step 4: Adding the Functionality to Mark Movies as Watched

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) {
        message.textContent =`${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }

    revealMessage()
}



// Add Intermediate portion for existing interactive web page.


function revealMessage() {
    message.classList.remove('hide');

    setTimeout(() => {
        message.classList.add('hide');
    }, 1000);
}








