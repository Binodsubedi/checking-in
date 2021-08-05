const About = document.getElementById('About_me');
const project = document.getElementById('Projects');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');

About.addEventListener('click', () => {

container1.classList.add('disabled'), container2.classList.add('enabled')

});

project.addEventListener('click', () => {

container2.classList.remove('enabled'), container1.classList.remove('disabled')
});