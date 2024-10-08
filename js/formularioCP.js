function validar(){
    var id;
    var error;
    var val = 0;

    /* VALIDAR USUARIO */
    id = document.getElementById('nombre-Usuario');
    error = document.getElementById('error-usuario');
    
    if(id.value.trim() == "")
    {
        error.innerHTML = "El nombre del usuario no puede estar en blanco";
        id.style.borderBottom = "2px solid red";
        document.getElementById('u-err').style.opacity = "1";
        document.getElementById('u-ok').style.opacity = "0";
    }
    
    else if(id.value.length <4)
    {
        error.innerHTML = "Mínimo 4 caractéres";
        id.style.borderBottom = "2px solid red";
        document.getElementById('u-err').style.opacity = "1";
        document.getElementById('u-ok').style.opacity = "0";
    }
    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('u-err').style.opacity = "0";
        document.getElementById('u-ok').style.opacity = "1";
        val = parseInt(val)+1;
    }


    /* VALIDAR NOMBRE */
    id = document.getElementById('nombre');
    error = document.getElementById('error-nombre');
    
    if(id.value.trim() == "")
    {
        error.innerHTML = "El nombre no puede estar en blanco";
        id.style.borderBottom = "2px solid red";
        document.getElementById('n-err').style.opacity = "1";
        document.getElementById('n-ok').style.opacity = "0";
    }
    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('n-err').style.opacity = "0";
        document.getElementById('n-ok').style.opacity = "1";
        val = parseInt(val)+1;
    }

    /* VALIDAR APELLIDO */
    id = document.getElementById('apellidos');
    error = document.getElementById('error-ape');
    
    if(id.value.trim() == "")
    {
        error.innerHTML = "Los apellidos no pueden estar en blanco";
        id.style.borderBottom = "2px solid red";
        document.getElementById('a-err').style.opacity = "1";
        document.getElementById('a-ok').style.opacity = "0";
    }
    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('a-err').style.opacity = "0";
        document.getElementById('a-ok').style.opacity = "1";
        val = parseInt(val)+1;
    }

    /* VALIDAR CORREO */
    id = document.getElementById('mail');
    error = document.getElementById('error-mail');
    
    if(id.value.trim() == "")
    {
        error.innerHTML = "El correo electrónico no puede estar en blanco";
        id.style.borderBottom = "2px solid red";
        document.getElementById('m-err').style.opacity = "1";
        document.getElementById('m-ok').style.opacity = "0";
    }
    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('m-err').style.opacity = "0";
        document.getElementById('m-ok').style.opacity = "1";
        val = parseInt(val)+1;
    }

    /* VALIDAR CONTRASEÑA */
    id = document.getElementById('pass');
    error = document.getElementById('error-pass');
    
    if(id.value.trim() == "")
    {
        error.innerHTML = "La contraseña no puede estar en blanco";
        id.style.borderBottom = "2px solid red";
        document.getElementById('p-err').style.opacity = "1";
        document.getElementById('p-ok').style.opacity = "0";
    }
    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('p-err').style.opacity = "0";
        document.getElementById('p-ok').style.opacity = "1";
        val = parseInt(val)+1;
    }


    if(val == 5)
    {
        var datos, user;
        user = document.getElementById('nombre-Usuario');

        datos = "Usuario: " + user.value + ", registrado con éxito.";
        window.location.reload();
        alert(datos);
        window.location.href = "pagina_principal.html";
    }
}

function blanco(){

    return Boolean;
}
