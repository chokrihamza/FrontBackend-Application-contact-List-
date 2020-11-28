const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
//connect DB
require('./config/connectDB')();//inVoke the module connectDB()


//Create route
//Middleware routing body parse
// Express body parser
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use('/api/contact', require('./routes/contacts'));

app.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log(`Server running at port ${PORT}`)
})