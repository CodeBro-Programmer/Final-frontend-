document.addEventListener("DOMContentLoaded", ()=>{
    let faqToggleBtn = document.getElementsByClassName("toggle");
let faqAnswer = document.getElementsByClassName("answer");

for(let i = 0; i < faqToggleBtn.length; i++){
    faqToggleBtn[i].addEventListener('click', ()=>{
    faqAnswer[i].classList.toggle("open");
})
}



//nav section
let Home = document.getElementById("home");
let About = document.getElementById("about");
let Product = document.getElementById("product");
let Campaign = document.getElementById("campaign");
let Contact = document.getElementById("contact");
let login = document.querySelector(".login");


Home.addEventListener('click', (e) => {
  e.preventDefault();
    window.alert("this will take you the homepage");
})

About.addEventListener('click', (e) => {
  e.preventDefault();
    window.alert("this will take you the about section");
})

Product.addEventListener('click', (e) => {
  e.preventDefault();
    window.alert("this will take you the products section");
})

Campaign.addEventListener('click', (e) => {
  e.preventDefault();
    window.alert("this will take you the campaign section");
})

Contact.addEventListener('click', (e) => {
  e.preventDefault();
    window.alert("this will take you the contact section");
})

login.addEventListener('click', (e) => {
  e.preventDefault();
    window.alert("Login!!!");
})



// collections section 
// top button
let brandBtn = document.querySelectorAll(".top-button");

 brandBtn.forEach(btn =>{
  btn.addEventListener('click',(e)=>{
      e.preventDefault();
      alert("this is the brand button");
  })
    btn.classList.add("buttonAnim")
})

//bottom button
let viewBtn = document.querySelectorAll(".bottom-button");

viewBtn.forEach(item =>{
  item.addEventListener('click',(e)=>{
      e.preventDefault();
      alert("this is the view button");
  })
    item.classList.add("buttonAnim")
})

//see more collection btn
document.querySelector(".collection-buttom").addEventListener('click', (e)=>{
  e.preventDefault();
  alert("this is the see more collecions button");
})

//view all product buttons

let viewAllP = document.querySelectorAll(".viewAllProductsBtn");

viewAllP.forEach(Product =>{
  Product.addEventListener('click',(e)=>{
      e.preventDefault();
      alert("View all products here");
  })
  Product.classList.add("buttonAnim")
})

//contact us
document.querySelector(".contact-us").addEventListener('click', (e)=>{
  e.preventDefault();
  alert("Contact Us");
  document.querySelector(".contact-us").classList.add("buttonAnim");
});

//footer button

document.getElementById("footerBtn").onclick = (e)=>{
  e.preventDefault();
  alert("Shop Now");
  document.getElementById("footerBtn").classList.add("buttonAnim");
}

let hamIcon = document.querySelector(".hamburgerIcon");
let navList = document.querySelector(".nav-list");

hamIcon.addEventListener('click', ()=>{
 let tog = navList.classList.toggle("nav-open");
 let enter = navList.classList.add("navAnim");

 if(enter){
  navList.classList.add("navAnimUp");
 }
 
  if(tog){
    hamIcon.textContent = "X";
    navList.classList.toggle("nav-close");
    
  }
  else{
    hamIcon.textContent = "☰";
    
  }

})


let shopNowBtn = document.querySelector(".shop-now");

shopNowBtn.addEventListener('click',(e) => {
  e.preventDefault();
  alert("Shop Now");
})
})
