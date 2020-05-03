const truliooMiddleware = require('trulioo-embedid-middleware')({ 
    apiKey: "<INSERT_KEY_HERE>" }); 
 const express = require('express'); 
 const app = express(); 
 const port = 8080;
 
 app.use(truliooMiddleware) 
 app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
 