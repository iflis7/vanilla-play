export const FileUploads = async (): Promise<{ el: HTMLElement }> => {
    const el = document.createElement('div');
    
    // HTML structure to display the different DOM operations
    el.innerHTML = ` 
    <div class="flex justify-evenly space-x-2 mt-8 text-center flex-wrap mx-auto px-8">
        <div class="mb-4 border-2 border-yellow-400 p-4 rounded-lg w-94">
            <h2 class="text-center text-orange-500 pb-2">1. File Upload </h2>
            <input type="file" id="file-input" multiple class="border p-2 mb-2 rounded"/>
            <button id="upload-btn" type="button" class="focus:outline-none text-gray-900 font-bold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-sm px-5 py-2 me-2 my-1 dark:focus:ring-yellow-900">Upload Files</button>
            <div id="file-list" class="mt-4"></div>
            <div id="progress-container" class="mt-4 hidden">
                <progress id="upload-progress" value="0" max="100" class="w-full"></progress>
                <span id="upload-status" class="text-gray-700">Uploading...</span>
            </div>
            <div id="upload-message" class="text-red-500 mt-2"></div>
        </div>
    </div>

    `;

    const progressContainer = el.querySelector('#progress-container') as HTMLElement;
    const uploadStatus = el.querySelector('#upload-status') as HTMLElement;
    const fileInput = el.querySelector('#file-input') as HTMLInputElement;
    const uploadProgress = el.querySelector('#upload-progress') as HTMLProgressElement;
    const uploadMessage = el.querySelector('#upload-message') as HTMLElement;


    el.querySelector('#upload-btn')?.addEventListener('click', function () {
        const files = fileInput.files;
    
        if (!files || files.length === 0) {
            alert('Please select a file to upload!');
            return;
        }
    
        // Show progress container
        progressContainer?.classList.remove('hidden');
        if (uploadStatus) uploadStatus.innerText = 'Uploading...';
    
        // Process each file
        Array.from(files).forEach(file => {
            uploadFile(file);
        });
    });
    
    function uploadFile(file: File) {
        // Validate file type and size
        if (!validateFile(file)) {
            const uploadMessage = el.querySelector('#upload-message') as HTMLElement;
            if (uploadMessage) uploadMessage.innerText = 'Invalid file type or size.';
            return;
        }
    
        // Prepare FormData for the file upload
        const formData = new FormData();
        formData.append('file', file);
    
        // Mock file upload API call (replace with actual API endpoint)
    
        // Simulate a file upload progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            if (progress <= 100) {
                uploadProgress.value = progress;
            } else {
                clearInterval(interval);
                uploadProgress.value = 100;
                uploadStatus.innerText = 'Upload successful!';
                el.querySelector('#upload-message')
                uploadMessage.innerText = '';
            }
        }, 500);
    
        // Uncomment this code to integrate with a real API (for example, Zoho API)
        /*
        fetch('YOUR_ZOHO_API_ENDPOINT', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('File uploaded successfully:', data);
            el.querySelector('#upload-status')!.innerText = 'Upload successful!';
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            el.querySelector('#upload-message')!.innerText = 'Error uploading file.';
        });
        */
    }
    
    function validateFile(file: File): boolean {
        // Validate file type (e.g., only allow images and PDFs)
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedTypes.includes(file.type)) {
            return false;
        }
    
        // Validate file size (e.g., max size of 10MB)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            return false;
        }
    
        return true;
    }
  
    return { el };
  };
  
