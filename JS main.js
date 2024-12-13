
        
        
 const container = document.querySelector('.container');
 const mainImage = document.querySelector('.image img');
 const imgSlier = document.querySelectorAll('.imgs img');


 imgSlier.forEach(image => {
   image.addEventListener('click', () => {
     mainImage.src = image.src;

     container.style.backgroundColor = image.dataset.bgColor;
   });
 });