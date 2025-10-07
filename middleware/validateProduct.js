const ValidationError = require('../errors/ValidationError');


module.exports = (req, res, next) => {
const { name, description, price, category, inStock } = req.body;
const errors = [];
if (!name) errors.push('name is required');
if (!description) errors.push('description is required');
if (price === undefined || price === null || isNaN(price)) errors.push('price must be a number');
if (!category) errors.push('category is required');
if (typeof inStock !== 'boolean') errors.push('inStock must be boolean');
if (errors.length) return next(new ValidationError(errors.join('; ')));
next();
};