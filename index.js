document.addEventListener('DOMContentLoaded', function () {
    document.body.style.overflowX = 'hidden';
});


const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");
  const toggleButton = document.getElementById('toggleButton')

  toggleButton.addEventListener("click", () => {
      nav.classList.toggle("active")
      if (toggleButton.classList.contains('fa-bars')) {
        toggleButton.classList.remove('fa-bars')
        toggleButton.classList.add('fa-times')
      } else {
        toggleButton.classList.remove('fa-times')
        toggleButton.classList.add('fa-bars')
      }
  });