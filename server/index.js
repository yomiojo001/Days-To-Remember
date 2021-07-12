import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();



app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => app.listen(PORT, () => console.log(`Server running on port:  ${PORT}`)))
.catch((error) => console.log(error.message))