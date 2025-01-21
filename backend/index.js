import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://bryananthony763:WaARQ3q6eLOlgIn8@cluster0.cfcq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in environment variables");
    process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB Atlas');
    app.use('/api/posts', postRoutes);
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
})
.catch((error) => console.error('MongoDB connection error:', error));
