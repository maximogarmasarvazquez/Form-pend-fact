class Inventario {
    constructor(productos) {
        this.productos = productos;
    }
    agregar(productoNuevo) {

        this.productos.push(productoNuevo); 
    }
}
let artPend = new Inventario ([]);

class Producto { // declaracion de una clase
    constructor(nombre,descripcion,cantidad,precio,fechaEntrega,cliente,estado) { //crear e inicializar un objeto creado a partir de una clase.
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.precio=precio;
        this.fechaEntrega=fechaEntrega;
        this.cliente=cliente;
        this.estado=estado;
    }
  toString() { 
        return `Nombre: ${this.nombre}, Descripcion: ${this.descripcion}, Cantidad: ${this.cantidad}, Precio: ${this.precio}, Fecha De Entrega: ${this.fechaEntrega}, Cliente: ${this.cliente}`;
    }
}
let producto1 = new Producto('Insecticida','Veneno para caracoles ',12,100,12,1,true); 
let producto2 = new Producto('Insecticida','Veneno para cucarachas',20,200,12,1,true); 
let producto3 = new Producto('Insecticida','Veneno para hormigas',32,300,12,1,false); 

artPend.agregar(producto1);
artPend.agregar(producto2);
artPend.agregar(producto3);

function Registro(){
    let nombre = document.getElementById("nombre").value;  
    let descripcion = document.getElementById("descripcion").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);
    let fechaEntrega = document.getElementById("fechaEntrega").value;
    let cliente = document.getElementById("cliente").value;

    let btn = document.querySelector('#select');
    
    let estado;
    if (btn.value == '1'){
        estado = true;
    }else if (btn.value == '2') {
        estado = false;  
    }
    console.log(btn.value);
    let nuevo = new Producto(nombre,descripcion,cantidad,precio,fechaEntrega,cliente,estado); 
    artPend.agregar(nuevo); 
    document.getElementById("formulario").reset();
}

function listarPend(){
    
    listaPendientes= artPend.productos.filter(p => p.estado == false);

    console.log(listaPendientes);
   
    limpiarTablaP();
  let tabla = document.getElementById("listaP");

  for (let i = 0; i < listaPendientes.length; i++) {
    let fila = tabla.insertRow();

    let nombre = fila.insertCell();
    let descripcion = fila.insertCell();
    let cantidad = fila.insertCell();
    let precio = fila.insertCell();

    nombre.innerHTML = listaPendientes[i].nombre;
    descripcion.innerHTML = listaPendientes[i].descripcion;
    cantidad.innerHTML = listaPendientes[i].cantidad;
    precio.innerHTML = listaPendientes[i].precio;
  }
}


function listarFact(){
    
    listaFacturados = artPend.productos.filter(p => p.estado == true);

    console.log(listaFacturados);
   
    limpiarTablaF();
  let tabla = document.getElementById("listaF");

  for (let i = 0; i < listaFacturados.length; i++) {
    let fila = tabla.insertRow();

    let nombre = fila.insertCell();
    let descripcion = fila.insertCell();
    let cantidad = fila.insertCell();
    let precio = fila.insertCell();

    nombre.innerHTML = listaFacturados[i].nombre;
    descripcion.innerHTML = listaFacturados[i].descripcion;
    cantidad.innerHTML = listaFacturados[i].cantidad;
    precio.innerHTML = listaFacturados[i].precio;
  }

}

function total(){
  console.log('total')
    let copArray = artPend.productos.map( e => parseFloat(e.precio));   
    let total = copArray.reduce((a , b) => a + b  ); 
 
        document.getElementById('total').innerText = 'El total por todos sus articulos es '+ total;

}

function limpiarTablaF(){
    let tabla = document.getElementById("listaF");
    tabla.innerHTML = `<table id="listaF">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Cantidad</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table> `;
  }

  function limpiarTablaP(){
    let tabla1 = document.getElementById("listaP");
    tabla1.innerHTML = `<table id="listaP">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Cantidad</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table> `;
  }

 
  
  
  window.onload = listarFact();
  window.onload = listarPend();

