// Define the image paths and descriptions
const images = [
    { src: "image1.jpg", description: "Description of Image 1" },
    { src: "image2.jpg", description: "Description of Image 2" },
    { src: "image3.jpg", description: "Description of Image 3" },
    { src: "image4.jpg", description: "Description of Image 4" },
    { src: "image5.jpg", description: "Description of Image 5" }
];

let currentIndex = 0;

// Function to update the image and description
function updateSlideshow() {
    const imageElement = document.getElementById('slideshow-image');
    const descriptionElement = document.getElementById('image-description');

    imageElement.src = images[currentIndex].src;
    descriptionElement.textContent = images[currentIndex].description;
}

// Previous Button Logic
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlideshow();
});

// Next Button Logic
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlideshow();
});

// Automatic image change every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlideshow();
}, 5000);

// Initialize slideshow
updateSlideshow();
