import { marked } from 'marked';

export const Nutshell = async (): Promise<{ el: HTMLElement }> => {

  const el = document.createElement('div');
  el.className = 'markdown-body mx-auto px-72';

  const markdownContent = `
![Javascript Structure](https://raw.githubusercontent.com/iflis7/vanilla-play/refs/heads/main/public/js_structure.png)

## Web APIs in JavaScript

The Web APIs provided by the browser extend JavaScript's capabilities, enabling developers to interact with the browser environment, manipulate web pages, and access various hardware and services.

##### DOM API - Manipulate HTML and CSS
\`\`\`javascript
 document.querySelector('h1').textContent = 'Hello, World!';
\`\`\`

##### Fetch API - Perform HTTP requests
\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
\`\`\`

##### Geolocation API - Access the user's geographic location
\`\`\`javascript
navigator.geolocation.getCurrentPosition(
  position => console.log(position.coords),
  error => console.error(error)
);
\`\`\`

##### Web Storage API - Store data locally
\`\`\`javascript
// Local Storage
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key'));

// Session Storage
sessionStorage.setItem('key', 'value');
console.log(sessionStorage.getItem('key'));
\`\`\`

##### Canvas API - Create and manipulate graphics
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);
\`\`\`

##### WebSockets API - Enable real-time communication
\`\`\`javascript
const socket = new WebSocket('wss://example.com/socket');
socket.onmessage = event => console.log(Message from server: \${event.data});
\`\`\`

##### **History API** - Manage browser history
\`\`\`javascript
history.pushState({ page: 1 }, "Title", "/new-url");
console.log(history.state);
\`\`\`

#####javascript **Location API** - Get or manipulate the current URL
\`\`\`
console.log(window.location.href);
window.location.replace("https://example.com");
\`\`\`
##### **Clipboard API** - Copy to and read from the clipboard
\`\`\`javascript
navigator.clipboard.writeText('Copied text!')
  .then(() => console.log('Text copied to clipboard'))
  .catch(err => console.error('Failed to copy text:', err));

// **Notifications API** - Display system notifications
if (Notification.permission === "granted") {
  new Notification("Hello, World!");
} else {
  Notification.requestPermission();
}
\`\`\`

##### **Drag and Drop API** - Enable drag-and-drop functionality
\`\`\`javascript
const dragItem = document.getElementById("drag-item");
dragItem.addEventListener("dragstart", event => {
  event.dataTransfer.setData("text/plain", dragItem.id);
});
\`\`\`
##### **File API** - Handle files in the browser
\`\`\`javascript
const input = document.createElement("input");
input.type = "file";
input.onchange = event => {
  const file = event.target.files[0];
  console.log(\`Selected file: \${file.name}\`);
};
document.body.appendChild(input);
\`\`\`

##### **IndexedDB API** - Store large amounts of structured data
\`\`\`javascript
const request = indexedDB.open("MyDatabase", 1);
request.onsuccess = event => {
  const db = event.target.result;
  console.log("Database opened:", db);
};
\`\`\`
##### **Device Orientation API** - Access device orientation
\`\`\`javascript
window.addEventListener("deviceorientation", event => {
  console.log(\`Alpha: \${event.alpha}, Beta: \${event.beta}, Gamma: \${event.gamma}\`);
});
\`\`\`

##### **Battery Status API** - Check battery level (limited support)
\`\`\`javascript
navigator.getBattery().then(battery => {
  console.log(\`Battery level: \${battery.level * 100}%\`);
});
\`\`\`

##### **Media Devices API** - Access camera and microphone
\`\`\`javascript
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => console.log("Media stream started", stream))
  .catch(err => console.error("Failed to access media devices:", err));
\`\`\`

##### **Speech Synthesis API** - Convert text to speech
\`\`\`javascript
const utterance = new SpeechSynthesisUtterance("Hello, world!");
speechSynthesis.speak(utterance);
\`\`\`

##### **Web Audio API** - Process and synthesize audio
\`\`\`javascript
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.type = "sine";
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.connect(audioContext.destination);
oscillator.start();
oscillator.stop(audioContext.currentTime + 1);
\`\`\`

##### **Intersection Observer API** - Monitor element visibility
\`\`\`javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(\`Element \${entry.target.id} is \${entry.isIntersecting ? "visible" : "not visible"}\`);
  });
});
observer.observe(document.getElementById("observe-me"));
\`\`\`

## DOM Manipulation

1. Accessing DOM Elements
You can use several methods to select elements on a page.

\`\`\`javascript
// Get a single element by ID
const header = document.getElementById("header");

// Get multiple elements by class name
const items = document.getElementsByClassName("item");

// Get multiple elements by tag name
const paragraphs = document.getElementsByTagName("p");

// Get the first element that matches a CSS selector
const firstItem = document.querySelector(".item");

// Get all elements that match a CSS selector
const allItems = document.querySelectorAll(".item");

console.log(header, items, paragraphs, firstItem, allItems);

\`\`\`
2. Modifying Content
You can update text and HTML of elements dynamically.

\`\`\`javascript
// Change the text content
header.textContent = "New Header Text";

// Change the inner HTML (can include tags)
header.innerHTML = "<span>Updated with HTML</span>";

// Append text content to an existing element
header.textContent += " - Appended Text";
\`\`\`
3. Changing Attributes
You can modify attributes like \`src\`, \`href\`, or \`class.\`

\`\`\`javascript
// Change an attribute
const image = document.querySelector("img");
image.setAttribute("src", "new-image.jpg");

// Get an attribute
console.log(image.getAttribute("src"));

// Remove an attribute
image.removeAttribute("alt");

\`\`\`

4. Styling Elements
Modify the styles of elements using the style property.

\`\`\`javascript
header.style.color = "blue";
header.style.fontSize = "24px";
header.style.backgroundColor = "lightgray";

\`\`\`
5. Adding and Removing Classes
Manipulating classes is better for maintaining a clean separation between JavaScript and CSS.

\`\`\`javascript
// Add a class
header.classList.add("highlight");

// Remove a class
header.classList.remove("highlight");

// Toggle a class (adds if not present, removes if present)
header.classList.toggle("highlight");

// Check if an element has a class
console.log(header.classList.contains("highlight"));

\`\`\`

6. Creating and Appending Elements
You can dynamically create and add new elements to the DOM.

\`\`\`javascript
// Create a new element
const newDiv = document.createElement("div");

// Add text to the new element
newDiv.textContent = "This is a dynamically created div";

// Append it to the body
document.body.appendChild(newDiv);

// Insert before an existing element
const container = document.querySelector(".container");
const referenceElement = document.querySelector(".item");
container.insertBefore(newDiv, referenceElement);

\`\`\`
7. Removing Elements
Remove elements from the DOM.

\`\`\`javascript
// Select and remove an element
const toRemove = document.querySelector(".item");
toRemove.remove();

// Remove child nodes
const parent = document.querySelector(".container");
const child = document.querySelector(".item");
parent.removeChild(child);
\`\`\`
8. Event Handling
Make elements interactive by listening for events like clicks, keypresses, etc.

\`\`\`javascript
// Add an event listener to an element
header.addEventListener("click", () => {
  console.log("Header was clicked!");
});

// Remove an event listener
const logClick = () => console.log("Clicked!");
header.addEventListener("click", logClick);
header.removeEventListener("click", logClick);
\`\`\`
9. Event Delegation
Use event delegation to handle events for multiple elements efficiently.

\`\`\`javascript
// Add a single event listener to a parent element
const list = document.querySelector(".list");
list.addEventListener("click", event => {
  if (event.target.tagName === "LI") {
    console.log(\`You clicked on: \${event.target.textContent}\`);
  }
});
\`\`\`

10. Working with Forms
Interact with user inputs and forms.

\`\`\`javascript
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault(); // Prevent form submission
  const input = document.querySelector("input").value;
  console.log(\`Form submitted with input: \${input}\`);
});
\`\`\`
  `;

  const htmlContent = await marked(markdownContent);
  el.innerHTML = htmlContent; 
  return { el };
}
