require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const swaggerDocs = require('./swaggerConfig');
const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./middleware/errorHandler');


const app = express();
const PORT = process.env.PORT || 3000;


// Body parsing
app.use(bodyParser.json());


// Logger (simple)
app.use(require('./middleware/logger'));


// Swagger docs
swaggerDocs(app);


// Routes
app.use('/api/products', productRoutes);


// Hello route
app.get('/', (req, res) => res.send('Hello, Express.js!'));


// 404 -> NotFoundError
app.use((req, res, next) => next(new NotFoundError('Endpoint not found')));


// Global error handler
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));