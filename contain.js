function validarForm(){

    var expRegNome=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegEmail=/^\w+@(\w+\.)+\w{2,4}$/; 
  
  
       var nome = document.getElementById("nome");
       var email = document.getElementById("email");
       var comentarios = document.getElementById("comentarios");

       //Campo nombre
       if(!nome.value)
       {
        alert("O campo nome e obligatorio");
        nome.focus();
        return false;
       }
       
       if (!expRegNome.exec(nome.value))
       {
          alert("O campo nome e incorreto")
          nome.focus();aq
          return false;
       }
       //campo email
       if(!email.value)
       {
        alert("O campo correo e obligatorio");
        email.focus();
        return false;
       }
       if(!expRegEmail.exec(email.value))
       {
         alert("O campo correo nao ten o formato correto.")
         email.focus();
         return false;
       }
       //campo comentarios
       if(!comentarios.value)
       {
        alert("O campo comentarios e obligatorio");
        comentarios.focus();
        return false;
       }
  
       return true;
    }
    // asociacion del boton enviar con el formulario en html//
    window.onload = function()
    { 
      var formulario = document.getElementById("form");
      formulario.onsubmit = validarForm;
    }

<<<<<<< HEAD
/*    const ul = document.querySelector('ul')
=======
    const ul = document.querySelector('ul')
>>>>>>> 67b3c533851f1f0eb9e7a4d8506faa7e750dd922

    function getApiGitHub() {
    fetch('https://api.github.com/users/geraldinetorres95/repos')
    .then(async res => {
    
        if(!res.ok) {
            throw new Error(res.status)
        }
    
        var data = await res.json()
    
        data.map(item => {
            let li = document.createElement('li')
    
            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>URL: ${item.url}</span>
            <span>Data Criação: 
                ${Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
            </span>
            `
            ul.appendChild(li)
            
        })
    })
  }
<<<<<<< HEAD
  getApiGitHub()*/
=======
  getApiGitHub()
>>>>>>> 67b3c533851f1f0eb9e7a4d8506faa7e750dd922
