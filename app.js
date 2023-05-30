let seleccion;
function ingreso (){
    let usuario = prompt ("ingrese su usuario de red")
    console.log("Bienvenido/a " + usuario +" al consultor de prestaciones"
    );          
}
ingreso()

class Consulta{
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
    let valor = parseInt(prompt("ingrese valor"));
    let prepaga = prompt("ingrese prepaga");
    const nuevaConsulta = new Consulta(prestacion, valor, prepaga); 
    arrayConsultor.push(nuevaConsulta);
    alert ("prestacion agregada");
}

function Consultor(){
    arrayConsultor.forEach((item) => {
        alert (`consulto por prestacion ${item.prestacion}, valor ${item.valor}, prepaga ${item.prepaga} `)
    });
}

function finalizarCarga(){
    const total = arrayConsultor.reduce((accum, item)=> accum + item.valor, 0)    
    alert(`total valor a facturar ${total}`)
}

let arrayConsultor =[]

let opcion = prompt("Seleccione opcion: \n 6: Ingresar prestacion; \n 7: Finalizar carga; \n 8: Salir")


  while(opcion !=="8"){
    if (opcion==="6"){
        cargaConsulta();
    } 

    if (opcion==="7"){
        finalizarCarga()
    }

    opcion = prompt(
        "Ingrese una opcion \n 6: Ingresar prestacion; \n 7: Finalizar carga; \n 8: Salir")
  }

alert("Aguardamos la nueva consulta, saludos!")
