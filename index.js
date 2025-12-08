     function Welcome(){
    alert("Welcome to my portfolio!");
}

function sendMessage(){
    alert("Your message has been sent successfully! Thank You");
}    
      
   document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
 anchor.addEventListener("onclick", function(e){
  e.preventDefault();
 document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth",
 });  
 });  
 }); 
 document.getElementById("contact-form")
 .addEventListener("submit", function(e){
 e.preventDefault();
  this.reset();
     
    });
  