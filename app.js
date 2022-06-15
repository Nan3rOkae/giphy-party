let gifForm = document.querySelector("form");
const APIkey = "kCyuKyMJjYjU7Ueg26CT0WDYhsQ6nUJk";


function generateHTML(pokeData) {
    document.lastChild.innerHTML += `
        <h1>${pokeData.name}</h1>
        <p>Height: ${pokeData.height}</p>
        <p>Weight: ${pokeData.weight}</p>
        <img src="${pokeData.sprites.front_default}" alt="Pokemon image" />
    `;
}

const generateError = (err) => {
    document.lastChild.innerHTML += `
        <span style="color: red;">${err} not found</span>
    `;
}



