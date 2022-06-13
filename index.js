const menuItems = document.querySelectorAll('.nav-header a[href^="#"]');

menuItems.forEach(item =>{
   item.addEventListener('click', scrollToIdOnclick);
})

function getScrollTopByHref(element){
   const id = element.getAttribute('href');
   return document.querySelector(id).offsetTop;
}
function scrollToIdOnclick(event){ 
   event.preventDefault();
   const to = getScrollTopByHref(event.target) - 80 ;
   scrollToPosition(to);
}
function scrollToPosition(to){
   window.scroll({
      top:to,
      behavior: "smooth",
   });
}

function validaName(){
   const nome = document.querySelector('#name');

   console.log(nome)
}