'use strict'

const contenedor = document.getElementById("contenedor");


const contenedor_login = document.getElementById("contenedor-login");

const id_btn_registrar = document.getElementById("id-btn-registrar");
const id_btn_ingresar = document.getElementById("id-btn-ingresar");
const contenedor_botones = document.getElementById("contenedor-botones");
const contenedor_ingresar = document.getElementById("contenedor-ingresar");
const contenedor_formulario = document.getElementById("contenedor-formulario");
const id_btn_registrar_submit = document.getElementById("id-btn-registrar-submit");
const btn_identificar = document.getElementById("btn-identificar");

let nombre_suario;
let direccion;
let genero;
let fecha_nacimiento;
let password;
let usuarios = new Array();

id_btn_registrar.addEventListener("click", ()=>{
    contenedor_login.style.display = "none";
    contenedor_formulario.style.display = "block";
})

id_btn_ingresar.addEventListener("click", ()=>{
    contenedor_botones.style.display = "none";
    contenedor_ingresar.style.display ="block";
});


id_btn_registrar_submit.addEventListener("click", ()=>{
    registrar();
});

function registrar(){
    //console.log("registrad");
    nombre_suario = document.getElementById("nombre-suario").value;
    direccion = document.getElementById("direccion").value;
    genero;
    fecha_nacimiento;
    password = document.getElementById("password").value;
    console.log(nombre_suario +" "+ direccion +" "+ password);

    usuarios.push(nombre_suario);
}

btn_identificar.addEventListener("click", ()=>{
    console.log("botn login");
})

