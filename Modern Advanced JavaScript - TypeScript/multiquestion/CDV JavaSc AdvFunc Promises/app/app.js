//TASK 1
// 1. Create a new folder called 'app'.
// 2. In 'app' create a package.json file using: npm init --y
// 3. Install lite-server using: npm install lite-server --save-dev
// 4. In package.json add a property: "type":"module" and a script "serve":"lite-server".
// 5. Create a JavaScript file 'app.js' and add a simple script: console.log("It works!");
// 6. Create a file 'index.html', add a <h1>OK</h1> in the body, and attach 'app.js' to this HTML file.
// 7. Serve the html file using: npm run serve

// Submit the HTML and JS code below.
// Attach also a screenshot showing 'OK' in the browser window and "It works!" in the browser's console.

//console.log("It works!");


//TASK 2
// 1. In your JS file, import faker.js using: import { faker } from "https://esm.sh/@faker-js/faker";
// 2. In your HTML file add a <div> element with an id of 'root'.
// 3. Create a Promise which creates an array of 5 objects, each containing: a 'firstname', a 'url' for an avatar image from GitHub , and a short fake bio. Check: https://fakerjs.dev/api/
// 4. When the Promise is fulfilled the data is displayed as an unordered list in the 'root' element of the HTML document.
// 5. Add some styling as necessary.

// Please note: In this exercise, do not use async/await.

import { faker } from "https://esm.sh/@faker-js/faker";

const mypromise = new Promise((resolve, reject) => {
    const users=[];

    for (let i = 0; i <5; i++) {
        const avatarid=Math.floor(Math.random()*100000000);
        const user ={
            name:faker.name.firstName(),
            url:'https://avatars.githubusercontent.com/u/'+avatarid,
            bio:faker.person.bio()
        }
        users.push(user);
    }
    resolve(users);
});

mypromise
.then(result=>{
    const ul=document.createElement("ul");
    for (let i = 0; i < result.length; i++) {
        const user = result[i];
        const li=document.createElement("li");   

        const img=document.createElement("img");
        img.src=user.url;
        img.style="max-width:40px;max-height:40px";
        li.appendChild(img);

        const name=document.createElement("span");
        name.innerHTML=user.name +" - ";
        name.style="padding: 10px;font-weight: bold;";
        li.appendChild(name);

        const bio=document.createElement("span");
        bio.innerHTML=user.bio;
        li.appendChild(bio);

        ul.appendChild(li);
    }
    document.getElementById("root").appendChild(ul);

});
