
Test de Nivelación
1. ¿Cómo funciona this en JavaScript?
    * Apunta haciendo referencia al elemento del objeto en el que está contenido.

2. ¿Cuál es la diferencia entre variables null, undefined y undeclared?
    * null: cuando a una variable se le asigna el valor null.
    * undefined: cuando se declara la variable, pero no se le asignó algún valor.
    * undeclared: cuando la variable todavía no se ha declarado.

3. ¿Qué es un «clousure» y cuándo o por qué usaría uno?
    * son funciones que encapsulan variables locales a las que solo se puede acceder por el return.
    * cuando necesite trabajar con diferentes objetos y cada uno pueda tener su propio estado.

4. Escriba un programa en JavaScript que dada la entrada (por ejemplo):
El valor de la propiedad «nombre» de cada objeto debe extraerse, sólo en el caso que el
valor de la propiedad «ciudad» sea «Córdoba» y almacenarse en un array ordenado por
edad (de menor a mayor) y por orden alfabético.
Es decir, la salida debe ser:
["Juan", "María", "Pedro", "Ana", "Patricia"]
```javascript
let input = [
    {nombre: "Pedro",edad: 20, ciudad:"Córdoba"},
    {nombre: "Patricia",edad: 22, ciudad:"Córdoba"},
    {nombre: "José",edad: 23, ciudad:"Mendoza"},
    {nombre: "María",edad: 20, ciudad:"Córdoba"},
    {nombre: "Juan",edad: 20, ciudad:"Córdoba"},
    {nombre: "Ana",edad: 22, ciudad:"Córdoba"}
];

// Filtro Córdoba
let aprobados = new Array();
input.forEach((elementos)=>{
    if (elementos.ciudad == 'Córdoba') {
        aprobados.push(elementos);
    }
});

// Ordenamiento
aprobados.sort((a,b) => {
    if (a.edad > b.edad) return 1;
    if (a.edad < b.edad) return -1;
    if (a.nombre > b.nombre) return 1;   
    if (a.nombre < b.nombre) return -1;  
    return 0;
}); 

// Agregado de nombres al array
aprobados.forEach((elementos)=>{
    let {nombre} = elementos;
    aprobados.push(nombre);    
}); 

// Eliminación de primeros objetos del arreglo
aprobados.splice(0, (aprobados.length / 2));

// Mostrar resultados
console.log(aprobados);
```


5. ¿Qué función cumple el doctype y cuántos tipos conoce?
    * Sirve para que los navegadores conozcan la sintaxis del tipo de documento.
    * HTML y XHTML

6. ¿Cuál es la diferencia entre HTML y XHTML?
    * XHTML está inspirada en XML y HTML en SGML, esta es más flexible mientras que XHTML es más estricta necesitando no solo las etiquetas de apertura, también las de cierre.

7. Generalmente, ¿por qué es buena idea agregar la etiqueta <link> dentro de la etiqueta <head> y la etiqueta <script> justo antes de cerrar la etiqueta <body>?
    * <link> Para que cargue los estilos al cargar el html.
    * <script> muchas veces el código js es pesado, por loque demoraría la carga de la web si lo ponemos arriba, por eso se acostumbra ponerlo al final.
 

8. Cree una página con dos preguntas propias. Su encuesta debe primero recopilar los datos personales de los participantes (nombre, dirección, sexo, fecha de nacimiento, una
contraseña, etc.) seguida de cuatro preguntas para responder. Se valora la variedad de
elementos usados en la página. Use CSS para mejorar el aspecto de su formulario.
9. ¿Cuál es la diferencia entre clases e identificadores en CSS?
    * El id se puede usar una vez y las clases todas las que quieramos en el mismo documento, a la vez al aplicar estilos id y class al mismo elemento se aplicarán los otorgados por el ID ya que son más importantes, también un elemento puede tener varias clases, pero  un solo id
10. ¿Cuál es la diferencia entre las posiciones relative, fixed, absolute y static para un elemento dado?
    * relative: nos permite posicionar un elemento y despues moverlo desde su lugar original.
    * fixed:  nos permite posicionar un elemento en donde su posicion respecto a la pantalla del usuario siempre va a ser la misma.
    * absolute: nos permite posicionar un elemento respecto a su contenedor y el resto de elementos ignoran la nueva posicion.
    * static: posicionamiento por defecto con el que los navegadores acomodan los elementos.