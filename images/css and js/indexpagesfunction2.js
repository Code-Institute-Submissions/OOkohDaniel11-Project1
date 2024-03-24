//Arrow js
//function for when you start srolling it pops up for you to go back to the top
let thisbutton =  document.getElementById('backtoTop');
//when user scrolls 20 px it will pop up and show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        thisbutton.style.display = "block";
    }else{
        thisbutton.style.display = "none";
    }
}
//when user clicks on button it goes to the top 
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//toggle button event
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})