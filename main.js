
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