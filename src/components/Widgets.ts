import { FileUploads } from './widgets/FileUpload';
import { InteractiveMap } from './widgets/InteractiveMap';

export const Widgets = async (): Promise<{ el: HTMLElement }> => {
    const el = document.createElement('div');
    el.innerHTML = `
        <h1 class="text-center text-2xl font-bold  py-4" id="title"> Widgets Examples </h1>
        <p class="text-center text-xl">Welcome to the Widgets Examples page!</p>
    `;
    
    // Create a container to hold all widgets
    const container = document.createElement('div');
    el.appendChild(container);

    // Initialize and render each widget here
    const fileUploadWidget = await FileUploads();
    const interactiveMapWidget = await InteractiveMap();

    // Append widgets to the container
    container.appendChild(fileUploadWidget.el);
    container.appendChild(interactiveMapWidget.el);

    return { el };
};
