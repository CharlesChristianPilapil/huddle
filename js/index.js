const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }

        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('#gago');
hiddenElements.forEach((el) => observer.observe(el));


// const putangina = document.querySelector('#gago');
// const pindot = document.querySelector('#pindot');

// pindot.addEventListener('click', () => {
//     console.log('putang ina mo');
//     putangina.classList.toggle('show');
// });