
 const elementoAgregado = document.getElementById("items"); 


function dibujarCarrito() {

  

  elementoAgregado.innerHTML = "";

  carrito.forEach(

      (e) => {
         
  
          let renglonesCar = document.createElement("tr");
          
               renglonesCar.innerHTML = `
              <td>${e.marca}</td>
              <td>${e.modelo}</td>
              <td>${1}</td>
              <td>${e.precio}</td>         
              <td><button id="eliminar-${e.modelo}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
              <td>${e.precio}</td>    
          `;
              

           elementoAgregado.append(renglonesCar);


          let botonEliminarProducto = document.getElementById(`eliminar-${e.modelo}`);
          botonEliminarProducto.addEventListener('click', () => {
          alert("Hicimos click en la posicion  " + carrito.indexOf(e));

              let pocision  =  carrito.indexOf(e);
              carrito.splice( pocision,1);             
              
              dibujarCarrito();
          });

         






      });
    };



















const modal = document.querySelector("#portafolio");

function crearModal(){
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })


};





