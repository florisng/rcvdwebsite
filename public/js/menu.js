// Toggle hamburger menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Toggle dropdowns on mobile
if (window.innerWidth <= 992) {
  document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', e => {
      e.preventDefault(); // prevent navigation
      const parent = dropdownToggle.parentElement;
      parent.classList.toggle('active');
    });
  });
}

// Optional: Re-attach listeners on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    // Remove all active classes on desktop
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active'));
  }
});
