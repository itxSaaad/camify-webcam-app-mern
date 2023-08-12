const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');

const connectDb = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

// Configure DotEnv
dotenv.config();

// Create App
const app = express();

// Connect Database
connectDb();

// Configure Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// Configure Routes
app.get('/', (req, res) => {
  res.send('API Is Runnig Perfectly!');
});

// Configure Error Handlers
app.use(notFound);
app.use(errorHandler);

// Configure Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
