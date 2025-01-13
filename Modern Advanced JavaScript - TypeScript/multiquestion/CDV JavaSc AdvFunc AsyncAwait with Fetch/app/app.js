//TASK 1

// Now use async/await to simplify your code,
// and refactor/restructure your code so that all the dog's and owner's information
// is displayed in the browser all at once (after all the required data has been downloaded).

// Although the end result should remain the same as in the previous exercise,
// your code should now be easier to follow since all the steps should be clearly visible:
// 1. Get the dog's image
// 2. Get the dog's name (with faker)
// 3. Get the dog's country code (using dog's name in step 2)
// 4. Get the dog's country name (using country code in step 3)
// 5. Get the dog's owner details
// 6. Draw everything on screen

//TASK 2
// In this particular app, we have seen that, the dog's country code is dependent on the dog's name, and the country name is dependent on the country code etc..
// However, the owner's details are non-dependent, hence the owner's data can be fetched straightwaway... in parallel... while the dog's information is also being fetched...

// Use Promise.all() to improve the downloading time of your app and fetch the owner's details without waiting for the rest of the information to be fetched.

// Although the end result should remain the same as in the previous exercise, the time taken to get gather all the information should become slightly less.
// For comparing the different times, you can also use the performance.now() function which returns the number of milliseconds with microsecond precision.


import { faker } from "https://esm.sh/@faker-js/faker";

const petname = faker.animal.petName();
document.querySelector("#name").innerText = petname;

async function fetchDogURL() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
}

async function fetchDogCountry() {
    const response = await fetch("https://api.nationalize.io/?name=" + petname);
    const data = await response.json();
    return data.country[0].country_id;
}

async function fetchCountryDetails(countryCode) {
    const response = await fetch("https://restcountries.com/v3.1/alpha/" + countryCode);
    const data = await response.json();
    return data[0];
}

async function fetchOwnerDetails() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data.results[0];
}

function displayDetails(dogImageUrl, dogCountry, countryDetails, ownerDetails) {
    document.querySelector("#dogImage").src = dogImageUrl;

    document.querySelector("#info").innerText = dogCountry;

    document.querySelector("#info").innerText += " - " + countryDetails.name.common + '-';
    document.querySelector("#flagImage").src = countryDetails.flags.png;

    document.querySelector("#owner").innerText =
    ownerDetails.name.title + " " +
    ownerDetails.name.first + " " +
    ownerDetails.name.last;

    document.querySelector("#address").innerText =
    ownerDetails.location.street.number + " " +
    ownerDetails.location.street.name + ", " +
    ownerDetails.location.city + " " +
    ownerDetails.location.state + ", " +
    ownerDetails.location.country;

    document.querySelector("#call").innerText ="Please call: "+ownerDetails.cell;
}

async function mainApp() {
    try {
        const dogImageUrl = await fetchDogURL();
        const dogCountry = await fetchDogCountry();
        const countryDetails = await fetchCountryDetails(dogCountry);
        const ownerDetails = await fetchOwnerDetails();


        displayDetails(dogImageUrl, dogCountry, countryDetails, ownerDetails);

    } catch (error) {
        console.log("we have an error", error);
    }
}

async function mainApp2() {
    const startTime = performance.now();

    try {
        const dogImagePromise = fetchDogURL();
        const dogCountryPromise = fetchDogCountry();

        const [dogImageUrl, dogCountry] = await Promise.all([dogImagePromise, dogCountryPromise]);

        const countryDetailsPromise = fetchCountryDetails(dogCountry);
        const ownerDetailsPromise = fetchOwnerDetails();

        const [countryDetails, ownerDetails] = await Promise.all([countryDetailsPromise, ownerDetailsPromise]);

        displayDetails(dogImageUrl, dogCountry, countryDetails, ownerDetails);

        const endTime = performance.now(); 
        console.log(`Total time taken: ${endTime - startTime} milliseconds`);
    } catch (error) {
        console.log("We have an error:", error);
    }
}

mainApp2();

