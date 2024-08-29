import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectionDB from './db/db.js'
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from "./routes/userRoutes.js"



//dotenv configuration
dotenv.config()

//mongodb connection
connectionDB()

const app = express() 

app.use(express.json())
app.use(cors())

app.use('/api/v1/user', userRoutes)

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Serve static files for resumes
app.use('/uploads/resumes', express.static(path.join(__dirname, 'uploads/resumes')));


// Serve the client build index.html file for all routes not defined
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });



app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`);
    
})