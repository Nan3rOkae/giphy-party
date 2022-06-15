let gifForm = document.querySelector("form");
const APIkey = "kCyuKyMJjYjU7Ueg26CT0WDYhsQ6nUJk";
const limit = 25;
var searchkey = " "
var offset = 0;
var clicked = 0;

const generateError = (err) => {
    document.lastChild.innerHTML += `
        <span style="color: red;">${err} not found</span>
    `;
}

gifForm.addEventListener("submit", async (evt) => {
    // this prevents the page from re-loading
    evt.preventDefault();
    clear();

  
    // logs for debugging, open the inspector!
    console.log("evt.target.gif.value = ", evt.target.gif.value);
     searchkey = evt.target.gif.value

    let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${searchkey}&limit=${limit}&offset=${offset}&rating=g&lang=en` 
    console.log(apiUrl);

    gifImage = document.querySelector("#gifImage")
    
    // try catch to handle unexpected api errors
    try {
        let response = await fetch(apiUrl);

        // now call is made, but data still not arrived
        console.log("response is: ", response);

        let responseData = await response.json();


        // now have actual data
        console.log("responseData is: ", responseData);

       displayResults(responseData);
      
    } catch (e) {
        generateError(evt.target.gif.value);
    }
    let loadMoreGif = document.querySelector("#loader");
    loadMoreGif.classList.remove("hidden");
});

function displayResults(responseData){
console.log(document.querySelector("#gifImage"))
    responseData.data.forEach(element => {
        gifImage.innerHTML += `<img src="${element.images.original.url}" alt="${element.title}" width = "100" height= "100">`; 
    })


}
function clear(){
    gifImage.innerHTML= " "
}
let loadMoreGif = document.querySelector("#loader");

// when clicked, prevent page from reloading, then increment clicked.
// change offset to when clicked times limit
loadMoreGif.addEventListener("click", async (evt) => {
    evt.preventDefault();
clicked += 1;
offset = clicked*limit;

  // logs for debugging, open the inspector!
 let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${searchkey}&limit=${limit}&offset=${offset}&rating=g&lang=en` 
 console.log(apiUrl);

 gifImage = document.querySelector("#gifImage")
 
 // try catch to handle unexpected api errors
 try {
     let response = await fetch(apiUrl);

     // now call is made, but data still not arrived
     console.log("response is: ", response);

     let responseData = await response.json();


     // now have actual data
     console.log("responseData is: ", responseData);

    displayResults(responseData);
   
 } catch (e) {
     generateError(evt.target.gif.value);
 }
});







    






