export const DomApi = async (): Promise<{ el: HTMLElement }> => {
    const el = document.createElement('div');
    
    // HTML structure to display the different DOM operations
    el.innerHTML = `
      <h1 class="text-center text-2xl font-bold  py-4" id="title"> DOM API Demonstration</h1>
      <p class="text-center text-xl">Welcome to the DOM API demonstration page!</p>
  
      <div class="flex justify-evenly space-x-2 mt-8 text-center flex-wrap ">
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500"> 1. Selecting Elements</h2>
            <p id="selected-title"></p>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500"> 2. Changing the Text Content</h2>
            <p>Click the button below to change the title text:</p>
            <div class="flex justify-center">
                <button id="change-text-btn" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Change Text</button>
            </div>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500"> 3. Changing Attributes</h2>
            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="#" id="link">Visit Example</a>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500 mb-1"> 4. Changing Styles</h2>
            <button id="change-style-btn" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Change Title Style</button>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500 mb-1"> 5. Adding and Removing Classes</h2>
            <button id="toggle-class-btn" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Toggle Italic Class</button>
        </div>
    
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500 mb-1"> 6. Creating, Appending, and Removing Elements</h2>
            <div class="py-2" id="container"> </div>
            <button id="create-element-btn" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Create New Element</button>
            <button id="remove-element-btn" type="button" class="focus:outline-none text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-1 dark:focus:ring-yellow-900">Remove Element</button>
        </div>
    
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500 mb-1"> 7. Event Listeners </h2>
            <div class="py-2" id="event-container"> </div>
            <button id="event-btn" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Click Me!</button>
        </div>
      </div>
    `;
    
      // 1. Selecting Elements
    const title = el.querySelector('#title') as HTMLElement;
    console.log("Title: ", title);
    const selectedTitle = el.querySelector('#selected-title');
    if (selectedTitle) {
      selectedTitle.textContent = `Selected Title: ${title ? title.textContent : ''}`;
    }
  
    // 2. Changing the Text Content
    const changeTextButton = el.querySelector('#change-text-btn') as HTMLButtonElement;
    if (changeTextButton) {
      changeTextButton.addEventListener('click', () => {
        title.textContent = 'Azul ay Amadal!';
      });
    }
  
    // 3. Changing attributes
    const link = el.querySelector('#link') as HTMLAnchorElement;
    if (link) {
      link.textContent = 'Go to Byltek';
      link.href = 'https://www.byltek.xyz';
    }
  
    // 4. Changing Styles
    const changeStyleButton = el.querySelector('#change-style-btn') as HTMLButtonElement;
    if (changeStyleButton) {
      changeStyleButton.addEventListener('click', () => {
        if (title) {
          title.style.color = 'gray';
          title.style.backgroundColor = 'lightblue';
        }
      });
    }
  
    // 5. Adding and removing Classes
    const toggleClassButton = el.querySelector('#toggle-class-btn') as HTMLButtonElement;
    if (toggleClassButton) {
      toggleClassButton.addEventListener('click', () => {
        if (title) {
          title.classList.add('font-extrabold');
          title.classList.toggle('italic');
          console.log("Title Contains italic: ", title.classList.contains("italic"));
        }
      });
    }
  
    // 6. Creating, Appending, and Removing Elements
    const createElementButton = el.querySelector('#create-element-btn') as HTMLButtonElement;
    const removeElementButton = el.querySelector('#remove-element-btn') as HTMLButtonElement;
    const container = el.querySelector('#container') as HTMLElement;
  
    if (createElementButton && container) {
      createElementButton.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('dynamic-div');
        newDiv.textContent = 'A dynamically created div';
        container.appendChild(newDiv);
      });
    }
  
    if (removeElementButton && container) {
      removeElementButton.addEventListener('click', () => {
        const toRemove = el.querySelector('.dynamic-div');
        if (toRemove) {
          toRemove.remove();
        }
      });
    }
  
    // 7. Event Listeners
    const eventButton = el.querySelector('#event-btn');
    const eventContainer = el.querySelector('#event-container');
    if (eventButton && eventContainer) {
      eventButton.addEventListener('click', () => {
        const newText = document.createElement('p');
        newText.textContent = 'An event-triggered text!';
        eventContainer.appendChild(newText);
        console.log('Button Clicked!');
      });
    }
  
    return { el };
  };
  