const express = require('express');


// express app init
const app = express();
// port
const PORT = 3000;


//app middleware
// parse incoming json data
app.use(express.json());


// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});


//localhost
app.listen( PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})