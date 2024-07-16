// Pre-Loader
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 3000); // Adjust the timeout as needed
});

// MENU

document.querySelector('.hamburger').addEventListener('click', function() {
  document.body.classList.toggle('menu-open');
  this.classList.toggle('active');
});



// Scroll

document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skills h1');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  skills.forEach(skill => {
    observer.observe(skill);
  });
});

// Video


document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("video");
  const videoSection = document.querySelector(".video-container");

  const playVideo = () => {
      const src = video.getAttribute('src');
      video.setAttribute('src', src + '?autoplay=1');
  };

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              playVideo();
          } else {
              const src = video.getAttribute('src').replace('?autoplay=1', '');
              video.setAttribute('src', src); // Pause the video
          }
      });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  observer.observe(videoSection);
});

// Image Slides
