const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
definition: {
openapi: '3.0.0',
info: { title: 'Express Week2 — Products API', version: '1.0.0' },
servers: [{ url: 'http://localhost:3000' }]
},
apis: ['./routes/*.js'],
};


const swaggerSpec = swaggerJSDoc(options);


module.exports = (app) => {
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};