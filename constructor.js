
class Bicicleta {
    constructor (marca , modelo, precio, especificacion,foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.especificacion = especificacion;
        this.foto = foto;
        
    
        /* this.imprimir = function (){
         let cont = document.createElement("div");
         cont.innerHTML = "<lu> La bicicleta ingresada es:</lu>" + 
         `<li> Marca: ${this.marca}</li>
         <li> Modelo: ${this.modelo}</li>
         <li> Precio $: ${this.precio}</li>
         <li> Estado: ${this.especificacion}</li>
         <li><img> ${this.foto}</img></li>
          `;
          
          impr.append(cont);              
         
         };*/
         
    };
};


const modelos = [];
const marcaBicicleta =["scott","colnago","giant","pinarello","trek"];
const modeloBicicleta = [];
const precio =[];


const productos = [];

const productosScott = [
    {marca:"scott",modelo:"addict",precio:12000000,especificacion:"nueva",foto:"./img/addictrc10.jpg"},
    {marca:"scott",modelo:"addict",precio:10000000,especificacion:"nueva",foto:"./img/addictrc20.jpg"},
    {marca:"scott",modelo:"addictrc",precio:10000000,especificacion:"nueva",foto:"./img/addictrc30.jpg"},
    {marca:"scott",modelo:"addictrc",precio:10000000,especificacion:"nueva",foto:"./img/addict30.jpg"}
];


const productosGiant = [
    {marca:"Giant",modelo:"advance",precio:12000000,especificacion:"nueva",foto:"./img/giantadvance.jpg"},
    {marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"nueva",foto:"./img/gianttcrpro.jpg"},
    {marca:"Giant",modelo:"propel",precio:10000000,especificacion:"nueva",foto:"./img/propeladvance.jpg"},
    {marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"nueva",foto:"./img/propelgray.jpg"}

];
const productosTrek = [
    {marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"nueva",foto:"./img/madone-sl-6-disc.JPG"},
    {marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"nueva",foto:"./img/TREKEMONDA.JPG"},
    {marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"nueva",foto:"./img/TREKMADONEBLUE.JPG"},
    {marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"nueva",foto:"./img/TREKSUPERCALIBER.JPG"}
    
];
const productosColnago = [
    {marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"nueva",foto:"./img/colnagoc64.jpg"},
    {marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"nueva",foto:"./img/COLNAGOC60.jpg"},
    {marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"nueva",foto:"./img/colnagovr3s.jpg"},    
    
];

const productosPinarello = [
    {marca:"Pinarello",modelo:"f12",precio:21000000,especificacion:"nueva",foto:"./img/pinarello.jpg"},
    {marca:"Pinarello",modelo:"f10",precio:22000000,especificacion:"nueva",foto:"./img/pinarello10.jpg"},
    {marca:"Pinarello",modelo:"contrareloj",precio:23000000,especificacion:"nueva",foto:"./img/pinarellocontrareloj.jpg"},    
    
];





const impresion = document.getElementById("cargarModelos");


const carrito = [];

class Carrito {
    constructor(marca, modelo, precio, especificacion, foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.especificacion = especificacion;
        this.foto = foto;
    }
}


function impri (){     
    
    productos.forEach((item)=>{            
        
        
        let cre = document.createElement("div");
        cre.innerHTML = "";
        cre.className = "container";
        
        let botonAgregar = document.createElement("button");
        botonAgregar.className = "btn btn-success";
        botonAgregar.innerText = "Agregar";
        
        let e = document.createElement("div");
        e.innerHTML = `  
             
        <h5> Marca: ${item.marca}</h5>
        <h5> Modelo: ${item.modelo}</h5>
        <h5> Precio $: ${item.precio}</h5>     
        <h5> Estado : ${item.especificacion}</h5>                  
         `;
         e.className="card-body";
         e.append(botonAgregar);
        
        let imagen = document.createElement("img");
        imagen.src = item.foto;  //"./img/imag2.jpg"
        imagen.className = "card-img-top";
        imagen.alt = item.nombre;


        let carta = document.createElement("div");
        carta.className = "card m-3 p-3";
        carta.style = "width: 20rem";
        carta.append(imagen);
        carta.append(e);
        cre.append(carta);
        impresion.append(cre);                   
        
       
        botonAgregar.onclick = () => {   

            let encontrarroducto = carrito.includes(item);

            const {marca,modelo,precio,especificacion,foto} = item;
            new Carrito (item);
            carrito.push(item);
            
            console.log(JSON.stringify(carrito));         
                        
             dibujarCarrito();
            
           /* if(encontrarroducto == true)
            {

              alert("Producto ya esta agregado");
            };   */
          
           
       
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La bicicleta a sido agregada',
                showConfirmButton: false,
                timer: 2500
              })           
          
        };    
        
        

   });     
                 
         
                  
 
 };
