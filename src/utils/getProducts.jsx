import productos from '../../productos.json'

// Función para obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.productos)
        }, 1000)
    })
}

// Función para obtener un producto por ID
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.productos.find(prod => prod.id === parseInt(id))
            if (producto) {
                resolve(producto)
            } else {
                reject(new Error('Producto no encontrado'))
            }
        }, 1000)
    })
}

// Función para obtener productos por categoría
export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = productos.productos.filter(
                prod => prod.categoria.toLowerCase() === categoria.toLowerCase()
            )
            resolve(productosFiltrados)
        }, 1000)
    })
}