let currentExperience = 0;
const experiences = document.querySelectorAll('.experience-card');

function changeExperience(direction) {
    experiences[currentExperience].classList.remove('active'); // Hide current experience
    currentExperience = (currentExperience + direction + experiences.length) % experiences.length; // Calculate next index
    experiences[currentExperience].classList.add('active'); // Show next experience
}
