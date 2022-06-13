const menuItems = document.querySelectorAll('.animation');
let button = document.querySelector('#button');
let nameDigitado = document.querySelector('#name');
let id = 0



const listaUsuario = []


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



function adicionar(evento){

   evento.preventDefault();

   let nome   = document.getElementById('name').value;
   let login  = document.getElementById('email').value;
   let cpf    = document.getElementById('cpf').value;
   let curso  = document.getElementById('curso').value;


   if(validarCPFTela()  == false){
      
      return
   }
   if(validarEmail()== false){
      return
   }

   const cpfs = [...document.querySelectorAll('.linha-cpf')].map(item => item.innerText);

   if(cpfs.indexOf(cpf) > -1){
      alert('CPF já cadastrado');
      return

   }

   const item  = document.createElement('tr');
      
   item.id = `linha-${id}`


   item.classList.add('todo_item');
   item.innerHTML = `
   <td>${nome}</td>
   <td>${login}</td>
   <td class="linha-cpf">${cpf}</td>
   <td>${curso}</td>
   <td><img onclick="javaScript:excluirItem(${id})"class="ImgDeleta"src="/public/lixo.svg"/></td>
   `
   document.querySelector('#lista-alunos').appendChild(item);

   id++
            
}
function excluirItem(id){
   document.querySelector(`#linha-${id}`).remove();
}

nameDigitado.addEventListener("keypress", function(e){
   const keyCode = (e.keyCode ? e.keyCode : e.wich);
   if(keyCode > 47 && keyCode < 58){
      e.preventDefault();
   }
})

button.addEventListener('click', adicionar);


			  
	
