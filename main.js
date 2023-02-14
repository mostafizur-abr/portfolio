const navbar = document.querySelector('.navbar');
const navItems = navbar.querySelectorAll('a');
const navBtn = document.querySelector('#nav-btn');
const navLinks = document.querySelector('.nav-items');

navbar.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName === 'A') {
        navItems.forEach(item => item.classList.remove('active'));
        target.classList.add('active');
    }
  });

  

navBtn.addEventListener('click', () => {
    navLinks.style.display
    if(navLinks.style.display === 'none'){
        navLinks.style.display = 'block';
    }else{
        navLinks.style.display = 'none';
    }

});
  
  
  
  
  


    