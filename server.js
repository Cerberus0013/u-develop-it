const express = require('express');
const PORT = process.env.PORT || 3001;
const inputCheck = require("./utils/inputCheck");
const db = require('./db/connection');
const  apiRoutes =require('./routes/apiRoutes')
const app = express();

//adding express middleware

app.use(express.urlencoded({extended: false}));
app.use(express.json());


apiRoutes.use('/api', apiRoutes);
//connect to DB


//default response to user for requets not found

app.use((req, res) => {
   res.status(404).end();
});


// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});