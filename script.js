// Get the video element
const video = document.getElementById('camera');

// Access the user's camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    // Set the video stream to the video element
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing camera:", error);
    alert("Unable to access camera. Please check your permissions.");
  });