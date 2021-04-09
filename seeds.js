const mongoose = require('mongoose');
const Product = require('./models/products')
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{
    console.log("Mongo Connection open");
 })
 .catch(err=>{
    console.log("Oh no! Mongo Connection Error");
    console.log(err);
 })

 /*const p = new Product({
     name: 'Ruby Grapefruit',
     price:1.99,
     category: 'fruit',
 });
 p.save()
 .then(p=>{
     console.log(p);
 } )
 .catch(e=>{
     console.log(e);
 }) */
 const seedProducts =[
     {
         name:'Fairy Eggplant',
         price:1.0,
         category:'vegetable',
     },
     {
         name:'Organic Goddess Melon',
         price:4.99,
         category:'fruit',
     },
     {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable',
     },
     {
         name: 'Organic Mini Seedless Watermelon',
         price:3.99,
         category:'fruit',
     },
     {
         name:'Choclate Whole mylk',
         price:2.69,
         category:'mylk',
     }

 ]
Product.insertMany(seedProducts)
.then(res=>{
    console.log(res);
})
.catch(e=>{
    console.log(e);
})