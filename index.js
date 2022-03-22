import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import contactsRoutes from './routes/contacts.js';


dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Database connection
mongoose.connect(MONGO_URI,)
    .then(() => console.log("Connection to Mongo db has been established successfully !"))
    .catch((err) => console.log(err));

// instanciate the app
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/', contactsRoutes);
app.use('/users', authRoutes);


app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));