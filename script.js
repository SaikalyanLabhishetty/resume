function openLinkedInProfile() {
    window.open("https://www.linkedin.com/in/kalyan-labhishetty-b16a90179/", "_blank");
}

function openGithubProfile() {
    window.open("https://github.com/SaikalyanLabhishetty", "_blank");
}


function Downloadresume() {
    const resumeUrl = 'https://drive.google.com/file/d/1XApO5kWB6IMh9loWicCbppMuV67RW3SX/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank'; 
    link.download = 'kalyan-Resume.pdf'; 
    link.click();
}
//Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.add('remove');
        }
    })
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

//progress bar animation
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//smooth transition
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const certificatesBox = document.getElementById('certificates-box');
    const projectBox = document.getElementById('projects-box');
    const achievementBox = document.getElementById('achievement-box');

    projectBox.addEventListener('click', function() {
        smoothScroll('#Internships');
    });

    certificatesBox.addEventListener('click', function() {
        smoothScroll('#Certificates');
    });

    achievementBox.addEventListener('click', function() {
        smoothScroll('#achievements');
    });
});

function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}
