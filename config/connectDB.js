const mongoose = require('mongoose');

function connectDB() {


      // Connecting to the database 
      mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
      });


      mongoose.connection.on('connected', () => {
            console.log('mongodb connected successfully');
      });

}

module.exports = connectDB