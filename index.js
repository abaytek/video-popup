const videoContainer = document.querySelectorAll(".video__container video");
const videoOverlay = document.querySelector(".video__overlay video");
const videoOverlayContainer = document.querySelector(
  ".video__overlay__container"
);
const crossBar = document.querySelector(".cross-bar");
crossBar.addEventListener("click", () => {
  videoOverlayContainer.style.display = "none";
  videoOverlay.pause();
});

videoContainer.forEach((video, e) => {
  video.addEventListener("click", () => {
    videoOverlay.src = video.src;
    videoOverlayContainer.style.display = "flex";
    videoOverlay.play();
    video.onhover = () => {
      video.play();
    };
  });
});
