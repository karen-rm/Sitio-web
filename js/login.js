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
        val = parseInt(val)-1;
    }

    else if(id.value.length <4)
    {
        error.innerHTML = "Mínimo 4 caractéres";
        id.style.borderBottom = "2px solid red";
        document.getElementById('u-err').style.opacity = "1";
        document.getElementById('u-ok').style.opacity = "0";
        val = parseInt(val)-1;
    }

    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('u-err').style.opacity = "0";
        document.getElementById('u-ok').style.opacity = "1";
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
        val = parseInt(val)-1;
    }
    else
    {
        error.innerHTML = "";
        id.style.borderBottom = "2px solid green";
        document.getElementById('p-err').style.opacity = "0";
        document.getElementById('p-ok').style.opacity = "1";
        val = parseInt(val)+1;
    }

    if(val == 2)
    {
        var datos, user;
        user = document.getElementById('nombre-Usuario');

        datos = "Usuario: " + user.value + ", sesión iniciada con éxito.";
        alert(datos)
        window.location.reload();
        window.location.href = "pagina_principal.html";
    }
}

