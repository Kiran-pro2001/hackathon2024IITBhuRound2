// Responsive Navigation Bar 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}





// Hero Section 

const videoHero = document.getElementById("video-hero");
const videoItems = document.getElementsByClassName("video-item");
const nextBtn = document.getElementsByClassName("next-btn")[0];
const videoTags = document.getElementsByTagName("video");
const aBox = document.querySelector(".loading-percent");

videoHero.addEventListener("mousedown", handleMouseDown);
videoHero.addEventListener("mouseup", handleMouseUp);

const videosLength = videoItems.length;
const loopTime = 8000;
let videoIdx = 0;
let loadPer = 2;
let isDragging = false;
let xPos = 0;

function hideVideos(videoIdx = 0) {
  for (let i = 0; i < videoItems.length; i++) {
    const rmTime = (videoTags[i].duration - videoTags[i].currentTime) * 1000;
    if (videoIdx != i) {
      videoItems[i].style.display = "none";
      videoTags[i].pause();
      if (i > 0 && rmTime < loopTime) {
        videoTags[i].currentTime = 0;
      }
    } else {
      videoItems[i].style.display = "block";
      videoTags[i].play();
    }
  }
}

function loopVideos(offset = 1) {
  let newVideoIndex = (videoIdx + offset) % videosLength;
  videoIdx = Math.max(0, newVideoIndex);
  hideVideos(videoIdx);
}
function updateLoading() {
  aBox.style.cssText = `width:${loadPer}%`;
  loadPer = (loadPer + 0.2) % 100;
}

function moveVideo(offset = 1) {
  loadPer = 2;
  loopVideos(offset);
}

hideVideos(videoIdx);
loopVideos();
setInterval(() => {
  moveVideo();
}, loopTime);
setInterval(() => {
  updateLoading();
}, loopTime / 500);

function handleMouseDown(event) {
  isDragging = true;
  xPos = event.clientX;
}

function handleMouseUp(event) {
  isDragging = false;
  newXPos = event.clientX;
  const dragDistance = newXPos - xPos;
  if (dragDistance > 10) {
    moveVideo(-1);
  } else if (dragDistance < -10) {
    moveVideo();
  }
}

function loadDocumet() {
  // videoHero.style.display = "block";
}

document.getElementsByClassName("how-to")[0].addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=KHWTqYHndrc", "_blank");
});




// Contact Section 

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting the traditional way

      // Add your form submission logic here (e.g., sending data to a server)

      // Show the success message
      formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
      formMessage.style.color = 'green'; // Ensure the message is green
      formMessage.style.display = 'block'; // Ensure the message is displayed

      // Reset the form
      form.reset();
  });
});
