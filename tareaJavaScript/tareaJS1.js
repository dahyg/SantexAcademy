//* Realizar una funcion que reciba un numero y escriba una piramide desde 1 
//*hasta ese numero de la siguiente forma:
//*para valor 6
//*1
//*12
//*123
//*1234
//*12356

//*para valor 3
//*1
//*123

function Piramide(numero) {
    let piramide = "";
    for (let i = 1; i <= numero; i++) {
      piramide += i;
      console.log(piramide);
    }
  }


  //*Escribir una funcion que reciba 2 array y devuelva un array 
  //*con todos los elementos que coinciden entre ellos

 //*Ejemplo:
 //*Array1: ['rojo', 'azul', 'amarillo']
 //*Array2: ['blanco', 'negro', 'rojo']
 //*Resultado: ['rojo']
  
 //*Ejemplo 2:
 //* Array1: [4, 3, true, 'manzana']
 //* Array2: ['pera', 3, f alse, true, 3, true]
 //* Resultado: [3, true]

  function filtrarElementos(array1, array2) {
    let resultado = [];
    
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        resultado.push(array1[i]);
      }
    }
    return resultado;
  }


  // 3)
  // 3.1) Dado el siguiente objeto
  // let carrito = {
  //     montoTotal: 10,
  //     productos: ["Leche"]
  // }
  
  // Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
  
  // 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
  // agregarProducto(nombre, precio, unidades) {
  //     // Completar aca...
  // }
  
  
  // Ej:
  // agregarProducto("Azucar", 5, 2);
  
  // //Resultado esperado
  // carrito = {
  //     montoTotal: 20,
  //     productos: ["Leche", "Azucar"]
  // }
  
  
  // 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”

  
  class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  }

  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
    
    agregarProducto(nombre, precio, unidades) {
      const productoExistente = this.productos.find(producto => producto.nombre === nombre);
      
      if (productoExistente) {
        console.log(`Ya existe ${nombre} con ${productoExistente.unidades} unidades`);
        return;
      }
      
      const nuevoProducto = new Producto(nombre, precio, unidades);
      this.productos.push(nuevoProducto);
      this.montoTotal += precio * unidades;
    }
  }
  
//  const carrito = new Carrito();