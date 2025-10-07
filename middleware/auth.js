module.exports = (req, res, next) => {
const apiKey = req.header('x-api-key') || req.header('X-API-KEY');
if (!apiKey || apiKey !== process.env.API_KEY) {
return res.status(401).json({ error: 'Unauthorized - invalid API key' });
}
next();
};