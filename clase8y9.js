class producto {
    constructor (id, marca, tipo, precio, imagen){
        this.id = id
        this.marca = marca
        this.tipo = tipo
        this. precio = precio
        this.imagen = imagen
    }
    verData(){
        console.log(`el suplemento es ${this.tipo}, de la marca ${this.marca} y su precio es ${this.precio}.`)
    }
}

const producto1 = new producto(1,"StarNutrition","Creatina", 900, "images.jfif")

const producto2 = new producto(2,"MyProtein","Creatina", 1200, "images.jfif")

const producto3 = new producto(3,"StarNutrition", "Proteina", 3000, "images.jfif")

const producto4 = new producto(4,"MyProtein","Proteina", 3500, "images.jfif")

const producto5 = new producto(5,"StarNutrition", "Quemador", 2200, "images.jfif")

const producto6 = new producto(6,"MyProtein", "Quemador", 2900, "images.jfif")

const tienda =[]
    tienda.push(producto1, producto2, producto3, producto4, producto5, producto6);

let divProductos = document.getElementById("productos")

function verProductos (array){
    divProductos.innerHTML = ""
    array.forEach((producto) => {
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =   
                            `<div id="${producto.id}" class="card" style="width: 18rem;">
                                <img class="card-img-top" style="height: 250px;" src="./assets/${producto.imagen}" alt="${producto.tipo} de ${producto.marca}">
                                <div class="card-body text-center">
                                    <h4 class="card-title">${producto.tipo}</h4>
                                    <p>Marca: ${producto.marca}</p>
                                    <p class="">Precio: ${producto.precio}</p>
                                    <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                </div>
                            </div>`
        divProductos.append(nuevoProducto)
    })
}
function crearProducto(array){
    let inputMarca = document.getElementById("inputMarca")
    let inputTipo = document.getElementById("inputTipo")
    let inputPrecio = document.getElementById("inputPrecio")
    let nuevoProd = new producto(array.length+1, inputMarca.value, inputTipo.value, inputPrecio.value, "images.jfif")
    array.push(nuevoProd)
    verProductos(array)
}

let btnGuardar = document.getElementById("btnAgregar")
btnGuardar.addEventListener("click", ()=>{
    crearProducto(tienda)
    console.log(tienda)
})

let btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", ()=>{
    verProductos(tienda)
})

function ocultarProductos(){
    divProductos.innerHTML = ""
}

let btnOcultar = document.getElementById("btnOcultar")
btnOcultar.addEventListener("click", ()=>{
    ocultarProductos()
})

function busquedaFiltrada (){
        let buscarProducto = document.getElementById("inputBuscar")
        let busqueda = tienda.filter((producto)=> producto.tipo.toLowerCase() == buscarProducto.value.toLowerCase())
        if(busqueda.length == 0){
            alert("No se encontro ningún suplemento")
        }else{
            console.log(busqueda)
            for(let productosEncotrados of busqueda){
                verProductos(busqueda)
            }
        }
    }

    btnBuscar = document.getElementById("btnBuscar")
    btnBuscar.addEventListener("click", ()=>{
        busquedaFiltrada(tienda)
    })