const mongoose = require('mongoose')
const Product = require('./models/product')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')

    .then(() => {
        console.log("Mongoose Connection Open")
    })
    .catch(err => {
        console.log("Ohh no Mongoose connection Error")
        console.log(err)
    })

// const p = new Product({
//     name : 'Grape',
//     price : 30,
//     category: 'fruits'
// })
// p.save()
// .then(p => {
//     console.log(p)
// })
// .catch((e) => {
//     console.log(e)
// })
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})


