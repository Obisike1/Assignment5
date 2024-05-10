// Explain the steps involved in setting up a Node.js server from scratch. 

/*
1.Install Node.js: download and install Node.js from the official website (https://nodejs.org). This will also install npm (Node Package Manager), which you'll use to manage dependencies for your server.

2.Create a Project Directory: Choose or create a directory where your Node.js project will reside. This directory will contain your server code and any other project files and open it with VS-Code.

3.Initialize Your Project: Open a terminal or command prompt, navigate to your project directory, and run the following command to initialize a new Node.js project:
NPM init --yes

4. Create your index.js file

5. Set up server by installing express: NPM install express

6. configure the express by typing:
    const express = require("express")
    sonst app = express()
7. Tell the server to listen to port:
    app.listen (6000,()=>{
        console.log("Server is Running")
    })
8. Install nodemon as a Dev dependency: nodemon is used to restart the termina at developer end. type the code:
npm i -D nodemon
9. Install Dotenv: its a file that store your secret informations. Type this code to install:
NPM i dotenv
10. Create a file for dotenv called: .env
11. GO to package.json and type under the scripts: 
    "start": "node index.js",
    "dev": "nodemon index.js"
12. To run server on index.js type: npm run start
    To run server on nodemon type: npm run dev
    */

    
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is Runing on port ${PORT}");
});

    app.get('/', (req, res) => {
    res.send('Welcome to my Server!');})

    // Array of product details
const products = [
    { id: 1, name: 'Milo', price: 10.99 },
    { id: 2, name: 'Milk', price: 20.99 },
    { id: 3, name: 'Sugar', price: 30.99 },
    { id: 4, name: 'Lipton', price: 40.99 },
];

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Endpoint to handle GET requests to fetch product details
app.get('/products', (req, res) => {
    // Generate random index to select a product from the array
    const randomIndex = Math.floor(Math.random() * products.length);
    // Get the product at the random index
    const randomProduct = products[randomIndex];
    // Send the selected product as the response
    res.json(randomProduct);
});

// Endpoint to handle POST requests to add a new product
app.post('/products', (req, res) => {
    // Extract product details from the request body
    const { name, price } = req.body;

    // Generate a random id for the new product
    const id = Math.floor(Math.random() * 1000) + 1;

    // Create a new product object
    const newProduct = { id, name, price };

    // Add the new product to the products array
    products.push(newProduct);

    // Send a success response with the added product
    res.status(201).json(newProduct);
});