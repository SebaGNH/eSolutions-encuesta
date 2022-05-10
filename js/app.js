'use strict'

let contenedor = document.getElementById("contenedor");


let contenedor_login = document.getElementById("contenedor-login");

let id_btn_registrar = document.getElementById("id-btn-registrar");
let id_btn_ingresar = document.getElementById("id-btn-ingresar");
let contenedor_botones = document.getElementById("contenedor-botones");
let contenedor_ingresar = document.getElementById("contenedor-ingresar");


let contenedor_formulario = document.getElementById("contenedor-formulario");

id_btn_registrar.addEventListener("click", ()=>{
    contenedor_login.style.display = "none";
    contenedor_formulario.style.display = "block";
})

id_btn_ingresar.addEventListener("click", ()=>{
    contenedor_botones.style.display = "none";
    contenedor_ingresar.style.display ="block";
   // console.log("boton ingresar");
});


//contenedor_botones.style.display = "none";