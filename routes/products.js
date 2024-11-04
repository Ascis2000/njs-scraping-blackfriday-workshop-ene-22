const express = require('express')
const products = require('../controller/products') // Importamos el controlador

const router = express.Router()

// Creamos los endpoints
router.get('/', products.getSaludo)
router.get('/products', products.getProducts)

module.exports = router