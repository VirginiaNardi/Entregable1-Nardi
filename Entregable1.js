class ProductManager {
    static id = 0
    constructor(title, description, price, thumbnail, stock) {
        this.products = []
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = ProductManager.id++,
        this.stock = stock
    }

    addProduct (product) {
        let codeUsed = this.products.some(item => item.code === product.code)

        if (product.title && product.description && product.price && product.thumbnail && product.code && product.stock && !codeUsed) {
            this.products.push ({
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock
            })
            console.log(`El producto ${product.title} fue agregado con exito`)
        } else {
            console.error (`ERROR: El code ${product.code} esta en uso`)
        }
    }

    getProducts () {
        return this.products
    }

    getProductById (id) {
        let productFound = this.products.find(prod => prod.code === id)

        if (productFound) {
            return productFound
        } else {
            console.error(`Producto inexistente`)
        }
    }

}

const adminProducts = new ProductManager()

const prueba1 = new ProductManager('productoDePrueba', 'Descripción del producto de prueba 1', 200, 'sin imagen', 25)

const prueba2 = new ProductManager('productoDePrueba2', 'Descripción del producto de prueba 2', 100, 'sin imagen', 15)

//prueba array vacio
console.log(adminProducts.getProducts());

//agregando el primer producto
adminProducts.addProduct(prueba1)

//produzco un error llamando al mismo producto
console.log(adminProducts.addProduct(prueba1))

//agrego el segundo producto
adminProducts.addProduct(prueba2)

//probando el funcionamiento de getProductById
console.log(adminProducts.getProductById(1))
console.log(adminProducts.getProductById(15))

//mostrando los productos existentes
console.table(adminProducts.getProducts());
