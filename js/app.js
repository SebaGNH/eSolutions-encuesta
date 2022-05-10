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
const btn_seguira_datos_personales = document.getElementById("btn-seguir-a-datos-personales");
// Formulario Datos personales
const contenedor_datos_personales = document.getElementById("contenedor-datos-personales");
const btn_seguir_a_cuantro_preguntas = document.getElementById("btn-seguir-a-cuantro-preguntas");

// Formulario cuatro preguntas
const contenedor_cuatro_preguntas = document.getElementById("contenedor-cuatro-preguntas");

const contenedor_submit = document.getElementById("contenedor-submit");

// inputs registro formulario
const input_form_pregunta_1 = document.getElementById("input_form_pregunta_1");
const input_form_pregunta_2 = document.getElementById("input_form_pregunta_2");
const input_form_nombre = document.getElementById("input_form_nombre");
const input_form_direccion = document.getElementById("input_form_direccion");
const input_form_password = document.getElementById("input_form_password");
const input_form_pregunta_3 = document.getElementById("input_form_pregunta_3");
const input_form_pregunta_4 = document.getElementById("input_form_pregunta_4");
const input_form_pregunta_5 = document.getElementById("input_form_pregunta_5");
const input_form_pregunta_6 = document.getElementById("input_form_pregunta_6");

// inputs ingresar
const input_nombre = document.getElementById("input-nombre");
const input_password = document.getElementById("input-password");

// Botón ingresar
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


/* Inicio <-- Formulario ------------------------------------*/
// botón registrar de página principal
id_btn_registrar.addEventListener("click", ()=>{
    contenedor_login_principal.style.display = "none";
    contenedor_formulario.style.display = "block";
    contenedor_boton_volver.style.display = "block";
    //contenedor_imagen.style.display = "none";

    //contenedor_datos_personales.style.display = "none"; // agregado
    contenedor_cuatro_preguntas.style.display = "none";
    contenedor_dos_preguntas_propias.style.display ="block";
    contenedor_submit.style.display = "none";

})

// Botón siguiente va de 2 preguntas a pedir datos personales
btn_seguira_datos_personales.addEventListener("click", mostrar_datos_Personales );
function mostrar_datos_Personales(){
    contenedor_imagen.style.display = "none";
    contenedor_boton_volver.style.display = "none";

    contenedor_dos_preguntas_propias.style.display ="none";
    contenedor_datos_personales.style.display = "block";    
}

//Botón siguiente, va de datos personales a cuatro preguntas finales
btn_seguir_a_cuantro_preguntas.addEventListener("click", ()=> {
    contenedor_datos_personales.style.display = "none";
    contenedor_cuatro_preguntas.style.display = "block";
    contenedor_submit.style.display = "block";
});



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
}



function registrar(){
    nombre_usuario = input_form_nombre.value;
    direccion = input_form_direccion.value;
    genero;
    fecha_nacimiento;
    password = input_form_password.value;
    //console.log(nombre_usuario +" "+ direccion +" "+ password);

    usuarios.push({nombre_usuario: nombre_usuario, password: password});
    console.log(usuarios);
    limpiar_campos_formulario();
}



btn_identificar.addEventListener("click", ()=>{
    //console.log("botn login");
    buscarUsuarios();

})


function buscarUsuarios(){
    let usuario_log = document.getElementById("input-nombre").value;
    let clave_log = input_password.value;
    console.log(usuarios.length);
    if (usuarios.length > 0) {
        usuarios.forEach((usuario)=>{        
            //console.log(usuario.nombre_usuario);    
            if (usuario.nombre_usuario == usuario_log &&  usuario.password == clave_log) {
                console.log("usuario correcto");
                limpiar_campos_identificar();
            }else if (usuario.nombre_usuario != usuario_log) {
                console.log("usuario no existe");
            }else if (usuario.password != clave_log) {
                console.log("Contraseña incorrecta");
            }
        })        
    }else{
        console.log("no hay usuarios registrados");
    }
    //console.log("entro a la funcion" );
}

//limpiar campos
function limpiar_campos_formulario(){
    input_form_pregunta_2.value = "";
    input_form_pregunta_1.value = "";
    input_form_nombre.value = ""; 
    input_form_direccion.value = "";    
    input_form_password.value = "";   
    input_form_pregunta_3.value = "";
    input_form_pregunta_4.value = "";
    input_form_pregunta_5.value = "";
    input_form_pregunta_6.value = "";
    console.log("campos formulario limpiados");
}

function limpiar_campos_identificar(){
    input_nombre.value = "";
    input_password.value = "";
}