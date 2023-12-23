


menu()

function menu() {
    const productos = [
        {nombre: "Monitor Led Samsung 24", tipo: "monitor", precio: 161999},
        {nombre: "Monitor Led Samsung 22", tipo: "monitor", precio: 136299},
        {nombre: "LG UltraGear 24GN60R LCD 23.8", tipo: "monitor", precio: 355000},
        {nombre: " Gigabyte G27FC led 27", tipo: "monitor", precio: 420791},
        {nombre: "Teclado Redragon Gamer Mecanico", tipo: "teclado", precio: 69099},
        {nombre: "Mouse gamer inalámbrico Logitech Serie G Lightspeed G305 black", tipo: "mouse", precio: 58316},
        {nombre: "Mouse gamer de juego Razer DeathAdder Essential blanco", tipo: "mouse", precio: 45969},
        {nombre: "Mouse gamer de juego Corsair M65 RGB Elite white", tipo: "mouse", precio: 88999},
      ];
    alert("Bienvenido/a a la Tienda PcShop");
    alert("Puede Buscar por el nombre del producto, por tipo del producto o ver todos los productos");
    let opcion = 5 
    while(opcion !== 9){
        opcion = Number(prompt("Metodo de Busquedad, \n  -Ingrese 0 Para buscar por tipo de Producto \n  -Ingrese 1 Para buscar por el nombre del producto exacto \n  -Ingrese 2 para ver tods los productos de la tienda \n  -Ingrese 9 para salir del menu"));
        if (opcion === 0){
            let tipo = prompt("Escriba el Tipo de producto que busca\n Tipos:\n -Monitor\n -Teclado\n -Mouse\n")
            const filtro = productos.filter(item => item.tipo === tipo);
            filtro.forEach(objetos =>{
                alert(
                    `
                    Nombre: ${objetos.id}
                    Tipo: ${objetos.nombre}
                    Precio: $${objetos.precio}
                    `
                );
            })
        }
        else if (opcion === 1){
            let nombrep = prompt("Ingrese el nombre del producto:")
            const productoe = productos.find((prod)=> prod.nombre === nombrep)
            if(productoe){
                alert(
                     `
                    Nombre: ${productoe.nombre}
                    Tipo: ${productoe.tipo}
                    Precio: $${productoe.precio}
                    `
                );
                
            }
            else{
            alert("ese producto no se encuentra");    
            }
            

        }
        else if (opcion === 2){
            productos.forEach(objetos =>{
                alert(
                    `
                    Nombre: ${objetos.nombre}
                    Tipo: ${objetos.tipo}
                    Precio: $${objetos.precio}
                    `
                );
            })
        }
        else if (opcion === 9){
            alert("Opcion de salida adios")

        }
        else{
            alert("Opcion invalida")
        }


    } 

}

