import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export const InteractiveMap = async (): Promise<{ el: HTMLElement }> => {
    // Create the main container
    const el = document.createElement('div');
    el.classList.add('mx-auto');
    el.style.width = '100%';
    el.style.height = '400px';

    // Create the structure for the map container
    el.innerHTML = `
    <div class="flex justify-evenly space-x-2 mt-8 text-center flex-wrap mx-auto px-8 ">
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-full" id="map-container">
            <h2 class="text-center text-orange-500 pb-2">2. Map Interactivity</h2>
            <div id="map" style="width: 100%; height: 250px;"></div> <!-- Map will go here -->
        </div>
    </div>
    `;

    // Ensure Leaflet CSS is loaded
    const addLeafletCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);
    };
    addLeafletCSS();

    // Wait for the CSS to load before initializing the map
    setTimeout(() => {
      // Initialize the map inside the div with id 'map'
      const mapElement = document.getElementById('map');
      if (mapElement) {
        const map = L.map(mapElement).setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([51.5, -0.09]).addTo(map)
          .bindPopup('A pretty CSS popup.<br> Easily customizable.')
          .openPopup();
      }
    }, 100);
    return { el };
};