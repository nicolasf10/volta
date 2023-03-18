const corsAnywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'], // Allow headers
    removeHeaders: ['cookie', 'cookie2'] // Remove cookies
}).listen(port, host, () => {
    console.log(`CORS Anywhere server running on ${host}:${port}`);
});
