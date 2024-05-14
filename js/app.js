let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
  menubar.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}


// Select all the stars
const stars = document.querySelectorAll('.stars i');

// Add a click event listener to each star
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Remove the active class from all stars
    stars.forEach(star => star.classList.remove('active'));

    // Add the active class to the clicked star and all the stars before it
    for(let i = 0; i <= index; i++) {
      stars[i].classList.add('active');
    }
  });
});


