'use strict'

const contenedor = document.getElementById("contenedor");
const contenedor_imagen = document.getElementById("contenedor-imagen");
const contenedor_boton_volver = document.getElementById("contenedor-boton-volver");
const contenedor_login_principal = document.getElementById("contenedor-login-principal");

//Pagina principal
const id_btn_registrar = document.getElementById("id-btn-registrar");
const id_btn_ingresar = document.getElementById("id-btn-ingresar");


//Formulario - id_btn_registrar
const contenedor_dos_preguntas_propias = document.getElementById("contenedor-dos-preguntas-propias");
const btn_seguir_a_preguntas_finales = document.getElementById("btn-seguir-a-preguntas-finales");
// Formulario Datos personales
const contenedor_datos_personales = document.getElementById("contenedor-datos-personales");
const btn_seguir_a_cuantro_preguntas = document.getElementById("btn-seguir-a-cuantro-preguntas");

// Formulario cuatro preguntas
const contenedor_cuatro_preguntas = document.getElementById("contenedor-cuatro-preguntas");

const contenedor_submit = document.getElementById("contenedor-submit");

// inputs registro formulario
const input_form_nombre = document.getElementById("input_form_nombre");
const input_form_direccion = document.getElementById("input_form_direccion");
const input_form_genero = document.querySelector('input[name="genero"]:checked');
const input_form_fecha = document.querySelector('input[type="date"]');
const input_form_password = document.getElementById("input_form_password");
const input_form_pregunta_1 = document.getElementById("input_form_pregunta_1");
const input_form_pregunta_2 = document.getElementById("input_form_pregunta_2");
const input_form_pregunta_3 = document.getElementById("input_form_pregunta_3");
const input_form_pregunta_4 = document.getElementById("input_form_pregunta_4");



// inputs ingresar
const input_nombre = document.getElementById("input-nombre");
const input_password = document.getElementById("input-password");
const span_usuario_inexistente = document.getElementById("span-usuario-inexistente");
const span_usuario_invalido = document.getElementById("span-usuario-invalido");
const span_clave_invalida = document.getElementById("span-clave-invalida");
// Botón ingresar
const contenedor_botones = document.getElementById("contenedor-botones");
const contenedor_ingresar = document.getElementById("contenedor-ingresar");
const contenedor_formulario = document.getElementById("contenedor-formulario");
const id_btn_registrar_submit = document.getElementById("id-btn-registrar-submit");
const btn_identificar = document.getElementById("btn-identificar");
const btn_volver = document.getElementById("btn-volver");

const contenedor_usuario_identifiado = document.getElementById("contenedor-usuario-identifiado");
let nombre_usuario;
let direccion;
let genero;
let fecha_nacimiento;
let password;
let pregunta_1;
let pregunta_2;
let pregunta_3;
let pregunta_4;

let usuarios = new Array();

/* Inicio <-- Formulario ------------------------------------*/
id_btn_registrar.addEventListener("click", mostrar_datos_Personales );
function mostrar_datos_Personales(){
    contenedor_imagen.style.display = "none";
    contenedor_boton_volver.style.display = "block";
    contenedor_formulario.style.display = "block";

    contenedor_dos_preguntas_propias.style.display ="none";
    contenedor_datos_personales.style.display = "block";  
    contenedor_login_principal.style.display = "none";  
    contenedor_submit.style.display = "none";
}

btn_seguir_a_cuantro_preguntas.addEventListener("click", ()=> {
    if (validar_formulario_datos_personales()) {
        contenedor_boton_volver.style.display = "none";

        contenedor_datos_personales.style.display = "none";
        contenedor_cuatro_preguntas.style.display = "block";
    
        contenedor_submit.style.display = "none";          
    }
});

btn_seguir_a_preguntas_finales.addEventListener("click", mostrar_contenedor_dos_preguntas );
function mostrar_contenedor_dos_preguntas(){
    if (validar_cuatro_preguntas()) {
        contenedor_login_principal.style.display = "none";
        contenedor_formulario.style.display = "block";
        contenedor_boton_volver.style.display = "none";
        contenedor_cuatro_preguntas.style.display = "none";
        contenedor_dos_preguntas_propias.style.display ="block";
        contenedor_submit.style.display = "block";
    }
}
/*-- Fin  <-- Formulario ------------------------------------*/

/* Inicio <-- Identificar ------------------------------------*/  
id_btn_ingresar.addEventListener("click", ()=>{
    contenedor_botones.style.display = "none";
    contenedor_ingresar.style.display ="block";
    contenedor_boton_volver.style.display = "block";
});
/*-- Fin  <-- Identificar ------------------------------------*/

id_btn_registrar_submit.addEventListener("click", (e)=>{
    e.preventDefault();
    registrar();

    contenedor_login_principal.style.display = "block";
    contenedor_formulario.style.display = "none";
    contenedor_boton_volver.style.display = "none";
    contenedor_imagen.style.display = "flex";
});


btn_volver.addEventListener("click", volver_principal);
function volver_principal(){
    contenedor_login_principal.style.display = "block";
    contenedor_formulario.style.display = "none";
    contenedor_boton_volver.style.display = "none";
    contenedor_imagen.style.display = "flex";

    contenedor_botones.style.display = "flex";
    contenedor_ingresar.style.display ="none";
    contenedor_usuario_identifiado.style.display ="none";
}

function registrar(){
    nombre_usuario = input_form_nombre.value;
    direccion = input_form_direccion.value;
    genero = document.querySelector('input[name="genero"]:checked').value;
    fecha_nacimiento = input_form_fecha.value;
    password = input_form_password.value;
    pregunta_1 = input_form_pregunta_1.value;
    pregunta_2 = input_form_pregunta_2.value;
    pregunta_3 = input_form_pregunta_3.value;
    pregunta_4 = input_form_pregunta_4.value;

    usuarios.push({nombre_usuario: nombre_usuario, direccion: direccion, genero: genero, fecha_nacimiento: fecha_nacimiento, password: password, pregunta_1: pregunta_1, pregunta_2: pregunta_2, pregunta_3: pregunta_3, pregunta_4, pregunta_4});
    limpiar_campos_formulario();
}


btn_identificar.addEventListener("click", ()=>{
    if (validar_identificar()) {
        buscarUsuarios();
    }
    
});
function buscarUsuarios(){
    let contenidoHTML ="";
    let usuario_log = document.getElementById("input-nombre").value;
    let clave_log = input_password.value;
    if (usuarios.length > 0) {
        usuarios.forEach((usuario)=>{    
            if (usuario.nombre_usuario == usuario_log &&  usuario.password == clave_log) {
                limpiar_campos_identificar();
                contenidoHTML = `
                <p>Nombre:  ${usuario.nombre_usuario} </p>
                <p>Dirección: ${usuario.direccion}</p>
                <p>Genero: ${usuario.genero}</p>
                <p>Fecha de nacimiento: ${usuario.fecha_nacimiento}</p>
                <p>Respuesta 1: ${usuario.pregunta_1}</p>
                <p>Respuesta 2: ${usuario.pregunta_2}</p>
                <p>Respuesta 3: ${usuario.pregunta_3}</p>
                <p>Respuesta 4: ${usuario.pregunta_4}</p>
            `;

            contenedor_imagen.style.display = "none";
            contenedor_usuario_identifiado.innerHTML = contenidoHTML;
            contenedor_ingresar.style.display ="none";
            contenedor_usuario_identifiado.style.display ="block";
            }else if (usuario.nombre_usuario != usuario_log) {
                input_nombre.style.border="3px solid red";
                span_usuario_invalido.style.visibility = "visible";

            }else if (usuario.password != clave_log) {
                input_password.style.border="3px solid red";
                span_clave_invalida.style.visibility = "visible";
            }
        })        
    }else{
        input_nombre.style.border="3px solid red";
        input_password.style.border="3px solid red";
        span_usuario_inexistente.style.visibility = "visible";
    }
}

//limpiar campos
function limpiar_campos_formulario(){
    input_form_nombre.value = ""; 
    input_form_direccion.value = ""; 
    input_form_fecha.value = "";   
    input_form_password.value = "";   
    input_form_pregunta_1.value = "";
    input_form_pregunta_2.value = "";
    input_form_pregunta_3.value = "";
    input_form_pregunta_4.value = "";
}

function limpiar_campos_identificar(){
    input_nombre.value = "";
    input_password.value = "";
}


// validar campos
function blanquear_bordes(){ 
    input_form_nombre.style.border="3px solid #fff";
    input_form_direccion.style.border="3px solid #fff"; 
    input_form_genero.style.border="3px solid #fff"; 
    input_form_fecha.style.border="3px solid #fff"; 
    input_form_password.style.border="3px solid #fff"; 
    input_form_pregunta_1.style.border="3px solid #fff"; 
    input_form_pregunta_2.style.border="3px solid #fff"; 
    input_form_pregunta_3.style.border="3px solid #fff"; 
    input_form_pregunta_4.style.border="3px solid #fff"; 
    input_nombre.style.border="3px solid #fff";
    input_password.style.border="3px solid #fff";
    span_usuario_invalido.style.visibility = "hidden";
    span_clave_invalida.style.visibility = "hidden";
    span_usuario_inexistente.style.visibility = "hidden";
}

function validar_formulario_datos_personales(){ //linea 82
    blanquear_bordes();
    if (input_form_nombre.value == "") {
        input_form_nombre.style.border="3px solid red";
        input_form_nombre.focus();
        return false;
    } 
    if (input_form_direccion.value == "") {
        input_form_direccion.style.border="3px solid red";
        input_form_direccion.focus();
        return false;
    }
    if (input_form_fecha.value == "") {
        input_form_fecha.style.border="3px solid red";
        input_form_fecha.focus();
        return false;
    }
    if (input_form_password.value == "") {
        input_form_password.style.border="3px solid red";
        input_form_password.focus();
        return false;
    }
    return true;
}


function validar_cuatro_preguntas(){
    blanquear_bordes();
    if (input_form_pregunta_1.value == "") {
        input_form_pregunta_1.style.border="3px solid red";
        input_form_pregunta_1.focus();
        return false;
    } 
    if (input_form_pregunta_2.value == "") {
        input_form_pregunta_2.style.border="3px solid red";
        input_form_pregunta_2.focus();
        return false;
    }
    if (input_form_pregunta_3.value == "") {
        input_form_pregunta_3.style.border="3px solid red";
        input_form_pregunta_3.focus();
        return false;
    }
    if (input_form_pregunta_4.value == "") {
        input_form_pregunta_4.style.border="3px solid red";
        input_form_pregunta_4.focus();
        return false;
    }
    return true;
}

function validar_identificar(){
    blanquear_bordes();
    if (input_nombre.value == "") {
        input_nombre.style.border="3px solid red";
        input_nombre.focus();
        span_usuario_invalido.style.visibility = "visible";
        return false;
    } 
    if (input_password.value == "") {
        input_password.style.border="3px solid red";
        input_password.focus();
        //document.getElementById("span-clave-incorrecta").style.visibility = "visible";
        span_clave_invalida.style.visibility = "visible";
        return false;
    }
    return true;
}


