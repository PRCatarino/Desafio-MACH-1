const menuItems = document.querySelectorAll('.nav-header a[href^="#"]');
let button = document.querySelector('#button');



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
   

   
button.addEventListener('click', 
   function(evento){

   evento.preventDefault();
      
     
   function validaCpf(){
      var cpf = document.querySelector('#cpf').value;

      // Codigo relativo ao video 3	

      // let numberRepeat = [11111111111 , 22222222222, 33333333333 , 44444444444 , 55555555555 , 66666666666 , 7777777777 , 88888888888 , 99999999999 , 00000000000];

      // if(cpf == numberRepeat){
      //    alert("cpf incorreto")
      // }

      function isCPF(cpf = 0){
      
         cpf  = cpf.replace(/\.|-/g,"");

         if(!validaPrimeiroDigito(cpf))
            return false;
         if(!validaSegundoDigito(cpf))
            return false;
      
         return true;

      }


      function validaPrimeiroDigito(cpf = null){
         let fDigit = (sumFristDigit(cpf) * 10) % 11;
               fDigit = (fDigit == 10 || fDigit == 11 ) ? 0 : fDigit; 
         if(fDigit != cpf[9])
            return false
            return true;
      }
      function validaSegundoDigito(cpf = null){
         let sDigit = (sumSecondDigit(cpf) * 10) % 11;
               sDigit = (sDigit == 10 || sDigit == 11 ) ? 0 : sDigit;
      
         if(sDigit != cpf[10])
            return false
            return true;
      }
   
   
      sumFristDigit = function(cpf, position=0, sum=0){
         if(position > 9)
            return 0;
         return sum + sumFristDigit(cpf,position+1,cpf[position] * ((cpf.length-1)-position));
      }
   

      sumSecondDigit = function(cpf, position=0, sum=0){
         if(position > 10)
            return 0;
         return sum + sumSecondDigit(cpf,position+1,cpf[position] * ((cpf.length)-position));
      }
      
   if(isCPF(cpf) == false){
      document.querySelector(".errorCPF").innerHTML = "Está invalido";
   }else{ document.querySelector(".errorCPF").innerHTML = "Está correto";
      }
}
   
   validaCpf()
   
   const criarItem = () =>{
      const nome = document.getElementById('name').value;
      const login = document.getElementById('email').value;
      const cpf = document.getElementById('cpf').value;
      const curso = document.getElementById('curso').value;
      const item = document.createElement('tr');
      
      item.classList.add('todo_item');
      item.innerHTML = 
      `<td>${nome}</td>
      <td>${login}</td>
      <td>${cpf}</td>
      <td>${curso}</td>
      <td><img class="ImgDeleta"src="/public/lixo.svg"/></td>
      `
      document.querySelector('#to-do-list').appendChild(item);
   }

   criarItem()

   const deletaItem = () =>{
      document.
   }
})


      



			  
	
