const openPopUpButtons = document.querySelectorAll('[data-popup-target]')
const closePopUpButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget) //looks for our data popup target and applies it to openPopUp function to open out newsletter
        openPopUp(popup)
    })
})

overlay.addEventListener('click', () => {
    const popUps = document.querySelectorAll('.pop-up.active') //looks for when we click on our  overlay which is our background to when the newsletter pop ups it will exit out of the newsletter
    popUps.forEach(popup => {
        closePopUp(popup)
    })
})

closePopUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.pop-up') // applies a funtion on the x button when we close it, it closes
        closePopUp(popup)
    })
})
function openPopUp(popup){
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}
function closePopUp(popup){
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

//when user fills out the form on homepage it will be added on here
const nameS = [""]
let emailS = [""]
let numberS =[""]

let form = document.getElementById('form')
form.addEventListener('submit', onSubmittion)

let errorM = document.getElementById('errors')

function onSubmittion(event){
    event.preventDefault()//prevents form from autosubmitting

    var fName = document.getElementById('fllname').value //gets the value of what is written in input for console.log
    var emailAdd = document.getElementById('email').value
    var pNumber = document.getElementById('number').value
    if(nameS.includes(fName)){
        errorM.innerHTML = alert (`Sorry this name ${fName} has already been used. Please try another`) // if fname is already in name it gives and error msg in HTML and this applies to the others aswell 
    }else if(emailS.includes(emailAdd)){
        errorM.innerHTML = alert(`Sorry this email address ${emailAdd} has already been used. Please try another`)
    }else if(numberS.includes(pNumber)){
        errorM.innerHTML = alert(`Sorry this phone number ${pNumber} has already been used. Please try another`)
    }else{
        nameS.push(fName) // add name entered in the name input to nameS and applies to email and phone numbers
        emailS.push(emailAdd)
        numberS.push(pNumber)
        form.submit()
        console.log('Full Name', nameS) //prints out console 
        console.log('Email Address', emailS)
        console.log('Phone Number', numberS)
    }
    
    
    
}
// images slider on homepage
const slides = document.querySelectorAll(".slides img"); //getting the images in the div with class slides 
let slideIndex = 0; //gets the first line 
let intervalId = null;


//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");//add class displaySlide to all images
        intervalId = setInterval(nextSlide, 5000);//goes to next slide in 5 seconds
    }
}
function showSlide(index){

    //when you reach the end of image it resets it back to the start 
    if(index >= slides.length){
            slideIndex = 0;

    }else if(index < 0 ){
            slideIndex = slides.length - 1;

    }

    //whe clicking on the next button it removes the class display slide and add it to the next image that will come up
    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); 
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide[slideIndex];
}
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