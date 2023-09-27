
//add scroll class 
const wrapper = document.querySelector(".wrapper");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    wrapper.classList.add("scrolled");
  } else {
    wrapper.classList.remove("scrolled");
  }
});


//add scroll effect



document.querySelector('.nav-brand').addEventListener("click",(e)=>{


  e.preventDefault();
  document.querySelector(".hero-section").scrollIntoView({behavior:"smooth"});
  
  
  })

document.querySelector('a[href="#portfolio"]').addEventListener("click",(e)=>{


e.preventDefault();
document.querySelector(".portfolio-section").scrollIntoView({behavior:"smooth"});


})

document.querySelector('a[href="#about"]').addEventListener("click",(e)=>{


  e.preventDefault();
  document.querySelector(".about-section").scrollIntoView({behavior:"smooth"});
  
  
  })

  document.querySelector('a[href="#contact"]').addEventListener("click",(e)=>{


    e.preventDefault();
    document.querySelector(".contact-section").scrollIntoView({behavior:"smooth"});
    
    
    })


 //active class
 
 
 const portfolio=document.querySelector("#portfolio");
 const about=document.querySelector("#about");
 const contact=document.querySelector("#contact");



 function setActive(element) {

  portfolio.classList.remove("active");
  about.classList.remove("active");
  contact.classList.remove("active");

  
  element.classList.add("active");
}


portfolio.addEventListener("click", function () {
  setActive(portfolio);
});

about.addEventListener("click", function () {
  setActive(about);
});

contact.addEventListener("click", function () {
  setActive(contact);
});