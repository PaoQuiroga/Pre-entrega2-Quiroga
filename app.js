let seleccion;
function ingreso (){
    let usuario = prompt ("ingrese su usuario de red")
    console.log("Bienvenido/a " + usuario +" al consultor de prestaciones"
    );          
}
ingreso()

class consulta{
    constructor(prestacion, valor, prepaga){ 
        this.prestacion =prestacion;
        this.valor =valor;
        this.prepaga =prepaga;
    }
}

let valor = [
    {prestacion: "grupo+", valor: "2600"},
    {prestacion: "grupo-", valor: "3000"},
    {prestacion: "pci+", valor: "14000"},
    {prestacion: "pci-", valor: "3500"},
    {prestacion: "pcd", valor: "3400"},
];

function cargaConsulta(){
    let prestacion = prompt("ingrese prestacion");
    let valor = prompt("ingrese valor");
    let prepaga = prompt("ingrese prepaga");
    const nuevaConsulta = cargaConsulta(prestacion, valor, prepaga);
    arrayConsulta.push(nuevaConsulta);
    alert ("prestacion agregada");
}

function Consultor(){
    arrayConsulta.forEach((item) => {
        alert (`consulto por prestacion ${item.prestacion}, valor ${item.valor}, prepaga ${item.prepaga} `);
    });
}

function finalizarOcontinuar(){prestacion
    const total = arrayConsulta.reduce((accum + item,valor),0)
        
    alert(`total valor a facturar ${total}`)
}

let arrayConsulta =[]

let opcion = prompt("Seleccione opcion: \n 6: Ingresar prestacion; \n 7: Seguir cargando; \n 8: Finalizar carga; \n 9: Salir")


  while(opcion !=="9"){
    if (opcion==="6"){
        cargaConsulta();
    } 

    if (opcion==="7"){
        SeguirCargando()
    }

    if (opcion === "8"){
        finalizarCarga()
    } 

    opcion = prompt(
        "Ingrese una opcion \n 7: Seguir cargando; \n 8: Finalizar carga; \n 9: Salir")
  }

alert("Aguardamos la nueva consulta, saludos!")


/* 
function prestacion (){
    seleccion = prompt ("Seleccione prestacion a facturar \n 1:grupo+ \n 2:grupo- \n 3:pci+ \n 4:pci- \n 5:pcd \n 6:compatibilidad \n 7: Seguir cargando; \n 8: Salir"
    );

    if ( seleccion === "1") {
        valor = 2600
        console.log(`selecciono grupo+. valor: ${valor} $`); 
    }
    else if ( seleccion === "2") {
        valor = 3000
        console.log(`selecciono grupo-.valor: ${valor} $`); 
    }
    else if ( seleccion === "3") {
        valor = 14000
        console.log(`selecciono pci+.valor: ${valor} $`); 
    }
    else if ( seleccion === "4") {
        valor = 3500
        console.log(`selecciono pci-.valor: ${valor} $`); 
    }
    else if ( seleccion === "5") {
        valor = 3400
        console.log(`selecciono pcd.valor: ${valor} $`); 
    }
    else if ( seleccion === "6") {
        valor = 15000
        console.log(`selecciono compatibilidad.valor: ${valor} $`); 
    }

    seleccion = prompt("seleccionar: \n 7: Seguir cargando; \n 8: Salir")
}
 */



