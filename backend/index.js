// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://riyadahmed2809:<password>@cluster1.cmfdxo0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', { useNewUrlParser: true, useUnifiedTopology: true });


const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});




// PublicKeyCredential = hlriwwav
// privateKeyCredential = e344a25a-b7d3-4108-a751-3305ae64841b