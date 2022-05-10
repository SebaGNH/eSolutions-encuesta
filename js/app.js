'use strict'

const contenedor = document.getElementById("contenedor");
const contenedor_imagen = document.getElementById("contenedor-imagen");
const contenedor_boton_volver = document.getElementById("contenedor-boton-volver");
const contenedor_login = document.getElementById("contenedor-login");

const id_btn_registrar = document.getElementById("id-btn-registrar");
const id_btn_ingresar = document.getElementById("id-btn-ingresar");
const contenedor_botones = document.getElementById("contenedor-botones");
const contenedor_ingresar = document.getElementById("contenedor-ingresar");
const contenedor_formulario = document.getElementById("contenedor-formulario");
const id_btn_registrar_submit = document.getElementById("id-btn-registrar-submit");
const btn_identificar = document.getElementById("btn-identificar");
const btn_volver = document.getElementById("btn-volver");

let nombre_usuario;
let direccion;
let genero;
let fecha_nacimiento;
let password;
let usuarios = new Array();

id_btn_registrar.addEventListener("click", ()=>{
    contenedor_login.style.display = "none";
    contenedor_formulario.style.display = "block";
    contenedor_boton_volver.style.display = "block";
    contenedor_imagen.style.display = "none";
})

id_btn_ingresar.addEventListener("click", ()=>{
    contenedor_botones.style.display = "none";
    contenedor_ingresar.style.display ="block";
    contenedor_boton_volver.style.display = "block";
});


id_btn_registrar_submit.addEventListener("click", (e)=>{
    e.preventDefault();
    registrar();

    contenedor_login.style.display = "block";
    contenedor_formulario.style.display = "none";
    contenedor_boton_volver.style.display = "none";
    contenedor_imagen.style.display = "flex";
});


btn_volver.addEventListener("click", ()=>{
    contenedor_login.style.display = "block";
    contenedor_formulario.style.display = "none";
    contenedor_boton_volver.style.display = "none";
    contenedor_imagen.style.display = "flex";

    contenedor_botones.style.display = "flex";
    contenedor_ingresar.style.display ="none";
});

function registrar(){
    nombre_usuario = document.getElementById("nombre-suario").value;
    direccion = document.getElementById("direccion").value;
    genero;
    fecha_nacimiento;
    password = document.getElementById("password").value;
    console.log(nombre_usuario +" "+ direccion +" "+ password);

    usuarios.push({nombre_usuario: nombre_usuario, password: password});
    console.log(usuarios);
}



btn_identificar.addEventListener("click", ()=>{
    //console.log("botn login");
    buscarUsuarios();

})


function buscarUsuarios(){
    usuarios.forEach((usuario)=>{
        let usuario_log = document.getElementById("identificador-nombre").value;
        let clave_log = document.getElementById("identificador-password").value

        //console.log(usuario.nombre_usuario);
        if (usuario.nombre_usuario == usuario_log &&  usuario.password == clave_log) {
            console.log("usuario correcto");
        }else{
            console.log("usuario no existe");
        }
    })
    //console.log("entro a la funcion" );
}