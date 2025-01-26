
/* --------------------------- DOM --------------------------- */
// 1- Selecting Elements
const title = document.getElementById('title');
console.log("title: ", title);

// 2- Changing the Text Content
title.textContent = 'Azul ay Amadal!';

// 3- Changing attributes
const link = document.querySelector('a');
link.textContent = 'Go to Byltek';
link.href = 'https://www.byltek.xyz';

// 4- Changing Styles
title.style.color = 'gray';
title.style.backgroundColor = 'lightblue';

// 5- Adding and removing Classes
title.classList.add('font-bold');
title.classList.toggle("w-68"); // Add if not present, remove if present
console.log("Title Contains w-68:: ", title.classList.contains("w-68"));
title.classList.remove('w-68');
console.log("Title Contains w-68:: ", title.classList.contains("w-68"));


// 6- Creating, Appending and Removing Elements
const newDiv = document.createElement("div"); // Create a new element
newDiv.textContent = "A dynamically created div"; // Add text to the new element
document.body.appendChild(newDiv); // Append it to the body

// Insert before an existing element
const container = document.getElementById("container");
const referenceElement = document.querySelector(".item");
container.insertBefore(newDiv, referenceElement);


// Select and remove an element
const toRemove = document.querySelector(".item");
toRemove.remove();

// Remove child nodes
const parent = document.querySelector("#container");
const child = document.querySelector(".item");
parent.removeChild(child);


// 7- Event Listeners
const button = document.querySelector("button");
const sometext = document.createElement("p"); 
sometext.textContent = "A Event created Text"; 
button.addEventListener("click", () => {
    container.appendChild(sometext);
    console.log("Button Clicked!");
});

// button.removeEventListener("click", handleClick); // Remove an event listener

// 8- Event Delegation
// Use event delegation to handle events for multiple elements efficiently.
const container1= document.querySelector("#container");
container1.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log("Button Clicked Here!");
    }
});


/* --------------------------- WEB API --------------------------- */
// 1- Fetch API
// add a filter to get only 3 posts
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then(data => console.log("fetch data: ", data))
    .catch(error => console.error("error: ", error));


// 2- Geolocation API
navigator.geolocation.getCurrentPosition(
    position => console.log(position.coords),
    error => console.error(error)
  );

// 3- Local Storage
localStorage.setItem('name', 'John');
const localStoragename = localStorage.getItem('name');
console.log("localStorage name: ", localStoragename);
localStorage.removeItem('name');
localStorage.clear();

// 4- Session Storage
sessionStorage.setItem('name', 'Iflis');
const sessionStorageName =  sessionStorage.getItem('name');
console.log("sessionStorage name: ", sessionStorageName);
sessionStorage.removeItem('name');
sessionStorage.clear();

// 5- Cookies
document.cookie = "name=John";
console.log("cookie: ", document.cookie);

// 6- Notifications API
// Example: Creating a notification
const icon = "https://imgs.search.brave.com/pLyFKk2_X_e9VHQcPHQ8YObaSEKPLMo5NzUQkmlXnNw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5ldy1ub3RpZmlj/YXRpb24taWNvbi1k/b3dubG9hZC1pbi1z/dmctcG5nLWdpZi1m/aWxlLWZvcm1hdHMt/LWFsZXJ0LWJlbGwt/c3RhcnR1cC1wYWNr/LXVzZXItaW50ZXJm/YWNlLWljb25zLTI4/Mjg4ODIucG5nP2Y9/d2VicCZ3PTEyOA"

document.getElementById('requestPermissionBtn').addEventListener('click', function() {
if ('Notification' in window) {
    // Request permission to show notifications
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        // Permission granted, show notification
        const notification = new Notification('New Message', {
          body: 'You have a new message from John!',
          icon: icon,
          requireInteraction: true,  // Makes notification sticky until user clicks it
          silent: false
        });
        console.log('Notification Created');

  
        // Handle click event on notification
        notification.onclick = () => {
          window.open('https://www.byltek.xyz', '_blank');
        };
      } else {
        console.log('Notification permission denied');
      }
    });
  } else {
    console.log('Your browser does not support notifications.');
  }
 });
  
