//TASK 1

// - Create a new folder called 'app'.
// - In 'app' create a package.json file using: npm init --y
// - Install lite-server using: npm install lite-server --save-dev
// - In package.json add a property: "type":"module" and a script "serve":"lite-server".
// - Create a JavaScript file 'app.js' and add a simple script: console.log("It works!");
// - Create a file 'index.html', add a <h1>My App</h1> in the body, and attach 'app.js' to this HTML file.
// - Add a <div> element with an id of 'root' in the HTML file.
// - Serve the html file using: npm run serve

// 1. Use Fetch API to get a random dog picture from: https://dog.ceo/api/breeds/image/random
// 2. Process/parse the received data and display the picture as shown in the screenshot below.
// 3. Import faker.js to fake and display a name for the dog. >> import { faker } from "https://esm.sh/@faker-js/faker";
// 3. Add some styling as required.

// Important:
// In this exercise, do not use async/await.
// If the Fetch API request is rejected/fails, default to a hard coded default link.

// Submit the JS code below.
// Attach also a screenshot of your app.


//TASK 2
// ADD code to your previous web application and:

// 1. Use Fetch API to predict the 'country of origin' of the dog based on their name, using the API: https://api.nationalize.io/?name=<dogs-name-here> or https://fakeapi.multiquestion.eu/nationalize.php?name=<dogs-name-here>
// 2. Process/parse the received data, select the first predicted country and display its code as shown in the screenshot below.
// --- The country data is in: data.country[0].country_id
// 3. Add some styling as required.

// Important:
// In this exercise, do not use async/await.
// If the Fetch API request is rejected/fails, default to a hard coded country code, ex. US

// Submit the JS code below.
// Attach also a screenshot of your app.


//TASK 3
// ADD code to your previous web application and:

// 1. Use Fetch API to get the fullname of the previously predicted country using the API: https://restcountries.com/v3.1/alpha/<countryCodeHere>
// 2. Process/parse the received data, and display:
// -- the official name of the country
// -- the flag of the country
// 3. Add some styling as required.

// Important:
// In this exercise, do not use async/await.
// If the Fetch API request is rejected/fails, default to a hard coded country name.

// Submit the JS code below.
// Attach also a screenshot of your app.


//TASK 4
// ADD code to your previous web application and:

// 1. Use Fetch API to get a random dog 'owner' using the API: https://randomuser.me/api/
// 2. Process/parse the received data, and display the owner's:
// -- title, first & last names
// -- address
// -- cell/phone
// 3. Add some styling as required.

// Important:
// In this exercise, do not use async/await.
// If the Fetch API request is rejected/fails, default to a hard coded 'owner' object.

// Submit the JS code below.
// Attach also a screenshot of your app.


import { faker } from "https://esm.sh/@faker-js/faker";

const petname = faker.animal.petName();
document.querySelector("#name").innerText = petname;

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json();
    })
    .then(data => {
        document.querySelector("#dogImage").src = data.message;
    })
    .catch(error => {
        console.error('Error fetching image:', error);
        document.querySelector("#dogImage").src = "https://images.dog.ceo/breeds/pointer-german/n02100236_308.jpg";
    })

fetch("https://api.nationalize.io/?name=" + petname)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Request failed");
        }
        return response.json();
    })
    .then((data) => {
        document.querySelector("#info").innerText = data.country[0].country_id;
        initCountryNameAndFlag(data.country[0].country_id);
    })
    .catch((error) => {
        document.querySelector("#info").innerText = "TR";
        initCountryNameAndFlag("TR");
    })

function initCountryNameAndFlag(countryCode) {
    fetch("https://restcountries.com/v3.1/alpha/" + countryCode)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Request failed");
            }
            return response.json();
        })
        .then((data) => {
            document.querySelector("#info").innerText += " - " + data[0].name.common;
            document.querySelector("#flagImage").src = data[0].flags.png;
        })
        .catch((error) => {
            document.querySelector("#info").innerText += " Turkiye";
            document.querySelector("#flagImage").src = "https://flagcdn.com/w320/tr.png";
        });
}

fetch("https://randomuser.me/api/")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Request failed");
        }
        return response.json();
    })
    .then((data) => {
        const result=data.results[0];
        document.querySelector("#owner").innerText = 
        result.name.title+" "+
        result.name.first+" "+
        result.name.last;

        document.querySelector("#address").innerText = 
        result.location.street.number+" "+
        result.location.street.name+", "+
        result.location.city+" "+
        result.location.state+", "+
        result.location.country;
        initCountryNameAndFlag(data.country[0].country_id);
    })
    .catch((error) => {
        document.querySelector("#owner").innerText = "Mrs Rosario Carmona";
        document.querySelector("#address").innerText = "1292 Rua Das Flores , Pouso Alegre Acre, Brazil";
    })


