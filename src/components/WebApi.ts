import { deleteCookie, getCookie, setCookie } from "../utils/utils";

export const WebApi = async (): Promise<{ el: HTMLElement }> => {
    const el = document.createElement("div");

    // HTML structure to display the different Web API operations
    el.innerHTML = `
      <h1 class="text-center text-2xl font-bold  py-4" id="title"> Web API Demonstration</h1>
      <p class="text-center text-xl">Welcome to the Web API demonstration page!</p>
  
      <div class="flex justify-evenly space-x-2 mt-8 text-center flex-wrap">
        <!-- Geolocation API -->
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
          <h2 class="text-center text-orange-500">1. Geolocation API</h2>
          <p class="py-2" id="geo-location">Getting your location...</p>
          <button id="get-location-btn" type="button" class="focus:outline-none text-gray-900 font-bold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-sm px-5 py-2 me-2 my-1 dark:focus:ring-yellow-900">Get Location</button>

        </div>
  
        <!-- Fetch API -->
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
          <h2 class="text-center text-orange-500">2. Fetch API</h2>
          <p class="py-2" id="api-data">Fetching data...</p>
          <button id="fetch-data-btn"  type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 my-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Fetch Data</button>

        </div>
  
        <!-- Local Storage API -->
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
          <h2 class="text-center text-orange-500"> 3. Local Storage API</h2>
          <p class="py-2" id="local-storage">Local Storage: ${localStorage.getItem("username") || "is Empty"
        }</p>
          <button id="deal-with-storage-btn" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 my-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Local Storage</button>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
          <h2 class="text-center text-orange-500"> 4. Session Storage API</h2>
          <p class="py-2" id="session-storage">Session Storage:  ${sessionStorage.getItem("username") || "is Empty"
        }</p>
          <button id="deal-with-session-storage-btn"  type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 my-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Session Storage</button>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
          <h2 class="text-center text-orange-500"> 5. Cookies API</h2>
          <p class="py-2" id="cookie-storage">Cookie Storage:  ${getCookie("username") || "is Empty"
        }</p>
          <button id="deal-with-cookie-storage-btn"  type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 my-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cookie Storage</button>
        </div>

        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
          <h2 class="text-center text-orange-500"> 6. Notifications API</h2>
          <p class="py-2" id="notification">Notification Permission</p>
          <button id="requestPermissionBtn" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 my-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Request Notif</button>

        </div>
      </div>
    `;

    // 1. Geolocation API
    const geoLocationElement = el.querySelector("#geo-location") as HTMLElement;
    const getLocationButton = el.querySelector(
        "#get-location-btn"
    ) as HTMLButtonElement;

    if (getLocationButton) {
        getLocationButton.addEventListener("click", () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        geoLocationElement.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                    },
                    () => {
                        geoLocationElement.textContent =
                            "Unable to retrieve your location.";
                    }
                );
            } else {
                geoLocationElement.textContent =
                    "Geolocation is not supported by this browser.";
            }
        });
    }

    // 2. Fetch API
    const fetchDataElement = el.querySelector("#api-data") as HTMLElement;
    const fetchDataButton = el.querySelector(
        "#fetch-data-btn"
    ) as HTMLButtonElement;

    if (fetchDataButton) {
        fetchDataButton.addEventListener("click", async () => {
            fetchDataElement.textContent = "Loading data...";
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                const data = await response.json();
                fetchDataElement.textContent = `Fetched Data: ${JSON.stringify(data)}`;
            } catch (error) {
                fetchDataElement.textContent = "Failed to fetch data.";
            }
        });
    }

    // 3. Local Storage API
    const localStorageElement = el.querySelector("#local-storage") as HTMLElement;
    const dealToStorageButton = el.querySelector(
        "#deal-with-storage-btn"
    ) as HTMLButtonElement;
    const localStorageData = localStorage.getItem("username");

    if (localStorageData === null) {
        dealToStorageButton.addEventListener("click", () => {
            localStorage.setItem("username", "JohnDoe");
            localStorageElement.textContent = `Data saved: ${localStorage.getItem(
                "username"
            )}`;
        });
    } else {
        dealToStorageButton.addEventListener("click", () => {
            localStorage.removeItem("username");
            localStorageElement.textContent = "Local Storage is empty.";
        });
    }

    // 4. Local Storage API
    const sessionStorageElement = el.querySelector(
        "#session-storage"
    ) as HTMLElement;
    const dealWithSessionStorageButton = el.querySelector(
        "#deal-with-session-storage-btn"
    ) as HTMLButtonElement;
    const sessionStorageData = sessionStorage.getItem("username");

    if (sessionStorageData === null) {
        dealWithSessionStorageButton.addEventListener("click", () => {
            sessionStorage.setItem("username", "Iflis");
            sessionStorageElement.textContent = `Data saved: ${sessionStorage.getItem(
                "username"
            )}`;
        });
    } else {
        dealWithSessionStorageButton.addEventListener("click", () => {
            sessionStorage.removeItem("username");
            sessionStorageElement.textContent = "Session Storage is Empty.";
        });
    }

    // 5. Cookies API
    const cookieStorageElement = el.querySelector(
        "#cookie-storage"
    ) as HTMLElement;
    const dealWithCookieStorageButton = el.querySelector(
        "#deal-with-cookie-storage-btn"
    ) as HTMLButtonElement;

    if (cookieStorageElement && dealWithCookieStorageButton) {
        const cookieData = getCookie("username");

        if (cookieData === null) {
            dealWithCookieStorageButton.addEventListener("click", () => {
                setCookie("username", "Iflis", 7); // Setting cookie for 7 days
                cookieStorageElement.textContent = `Cookie Storage: ${getCookie(
                    "username"
                )}`;
            });
        } else {
            dealWithCookieStorageButton.addEventListener("click", () => {
                deleteCookie("username");
                cookieStorageElement.textContent = "Cookie Storage: is Empty";
            });
        }
    }

    // 6. Notification API

    // 6- Notifications API
    // Example: Creating a notification
    const icon = "https://imgs.search.brave.com/pLyFKk2_X_e9VHQcPHQ8YObaSEKPLMo5NzUQkmlXnNw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5ldy1ub3RpZmlj/YXRpb24taWNvbi1k/b3dubG9hZC1pbi1z/dmctcG5nLWdpZi1m/aWxlLWZvcm1hdHMt/LWFsZXJ0LWJlbGwt/c3RhcnR1cC1wYWNr/LXVzZXItaW50ZXJm/YWNlLWljb25zLTI4/Mjg4ODIucG5nP2Y9/d2VicCZ3PTEyOA"

    const requestPermissionBtn = el.querySelector('#requestPermissionBtn') as HTMLButtonElement;
    const notificationElement = el.querySelector('#notification') as HTMLElement;

    if (requestPermissionBtn) {
        requestPermissionBtn.addEventListener('click', () => {
            if ('Notification' in window) {
                // Request permission to show notifications
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        notificationElement.textContent = 'Notification permission granted';
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
                        notificationElement.textContent = 'Notification permission denied';
                        console.log('Notification permission denied');
                    }
                });
            } else {
                console.log('Your browser does not support notifications.');
            }
        });
    }

    return { el };
};
