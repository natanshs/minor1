let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Reset to first slide
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}