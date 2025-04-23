// Importing the Express framework to create the server and handle routes
import express from 'express';
// Importing CORS middleware to enable Cross-Origin Resource Sharing
import cors from 'cors';
// Importing routes for Stable Diffusion API from a separate file
import sdRoutes from './routes/stablediffusion.routes.js';


import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Creating an instance of an Express application
const app = express();
// Defining the port on which the server will run, defaulting to 8080 if not specified in the environment variables
const port =  8080;



// Enabling CORS for all incoming requests
app.use(cors());
app.use(express.json({  })); //by default string madhe response yeto  
//simple ji apli lionk yete (response) tyala json madhe convert karto

// Mounting the Stable Diffusion API routes under the '/api/v1/sdapi' path
app.use('/api/v1/sdapi', sdRoutes);   // hit karnar post la router chya

// Defining a basic route for the root URL that responds with a JSON message
//app.get('/', (req, res) => {            //localhost:8080 la hit karnar
  //  res.status(200).json({ message: 'Hello World!' });
//});


//app.get('/aadesh', (req, res) => {            //localhost:8080 la hit karnar
  //  res.status(200).json({ message: 'Hello Aadesh!' });
//});

// Starting the server and listening on the specified port
app.listen(port, () => {        //server start hotoy
    console.log('Server listening on port 8080');
});