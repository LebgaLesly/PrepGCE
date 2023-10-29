require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//import routes
const studyBoxRoutes = require('./Routes/StudyBoxRoutes')

// init app & middleware
const app = express();
app.use(express.json());
app.use(cors());

//connecting to database
mongoose.connect(process.env.URI).then(() => {
  console.log('Connected to Database');
});


//routes
app.use('/study', studyBoxRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT} .`);
});
