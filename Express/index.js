const express = require('express');
const app = express();

console.log(app);

let port = 3000; //port number (8080)

app.listen(port, () =>{ //listen is a websever that listen on port 3000
    console.log(`Server is running on port ${port}`);
});


/* Sending and Response 
app.use((req, res) => {
    console.log('Request received');
    res.send({
        name: "apple",
        colour: "red"   
   });
}); */ 

/*Routing in Express 
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/hey', (req, res) => {
    res.send('hey its me ');
});*/


/*Path parameters 
app.get('/:username', (req, res) => {
    console.log(req.params);
    res.send("Hello");
}); */


/* Qurey String */
app.get("/search",(req, res) => {
    console.log(req.query);
    res.send("no result");
})

