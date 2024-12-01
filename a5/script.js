// Define the image paths and descriptions
const images = [
    { src: "chermiti-mohamed-bNVq5OEzYgY-unsplash.jpg", description: "soccer" },
    { src: "fabrizio-russo-OFsFrMx48dI-unsplash.jpg", description: "racecar" },
    { src: "oliver-sjostrom-m-qps7eYZl4-unsplash.jpg", description: "surf" },
    { src: "raymond-petrik-OAP9XCN-mmM-unsplash.jpg", description: "motorcycle" },
    { src: "tom-morbey-Ke_bXG4dc2w-unsplash.jpg", description: "skateboard" }
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
