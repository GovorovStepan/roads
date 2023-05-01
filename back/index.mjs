// import Directions from '@mapbox/mapbox-sdk/services/directions'
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT
const secretKey = 'mysecretkey';

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
    // const db = client.db('easy-roads');
    // const usersCollection = db.collection('users');
    app.post('/register', async (req, res) => {
      const { username, password } = req.body;

      // Check if user already exists
      const existingUser = await usersCollection.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Add new user to database
      const newUser = { username, password: hashedPassword };
      await usersCollection.insertOne(newUser);

      res.status(201).json({ message: 'User registered successfully' });
    });

    // Login endpoint
    app.post('/login', async (req, res) => {
      const { username, password } = req.body;

      // Find user by username
      const user = await usersCollection.findOne({ username });

      // Check if user exists
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      // Generate JWT
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

      res.status(200).json({ token });
    });

    // Authentication middleware
    const authMiddleware = async (req, res, next) => {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const token = authHeader.split(' ')[1];

      try {
        const decoded = jwt.verify(token, secretKey);
        const user = await usersCollection.findOne({
          username: decoded.username,
        });

        if (!user) {
          return res.status(401).json({ message: 'Authentication failed' });
        }

        req.user = user;
        next();
      } catch (err) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
    };

    // Protected endpoint
    app.get('/protected', authMiddleware, (req, res) => {
      res.status(200).json({ message: `Hello, ${req.user.username}` });
    });

    // Start server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => console.error('MongoDB connection error:', error));
