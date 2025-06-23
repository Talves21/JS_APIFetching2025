// JSON = Javascript Object Notation


// Fetching
// This method will handle all the Asynchronous parts of async/await/promises
let url = 'http://swapi.info/api/people/1';
let currentChar;
let counter = 1;
let button = document.querySelector('#showChar');
let charPlacement = document.querySelector('.characterTraits');
button.addEventListener('click', pasteDataToPage);

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         currentChar = data
//     })
//     .catch(error => {
//         console.log(error);
//     })

// Undefined
// console.log(currentChar);

async function fetchData(currentCount) {
    let url = `http://swapi.info/api/people/${currentCount}`;

    await fetch(url)
        .then(res => res.json())
        .then(data => {
            // Choosing specific data within an object
            // console.log(data.eye_color, data.birth_year);
            currentChar = data;
            // Below we received {object Object}}
            // charPlacement.innerText = currentChar;
        })
        .catch(error => {
            console.log(error);
        })
}

async function pasteDataToPage () {
    // References fetch function from above
    await fetchData(counter);
    counter++
    console.log(currentChar);

    let paragraph = document.createElement('p');
    paragraph.innerText = currentChar.name;
    charPlacement.append(paragraph);
}