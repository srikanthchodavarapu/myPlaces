const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//mongodb+srv://srikanthchodavarapu:<password>@cluster0.e3jvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://sa:sa12345@cluster0.e3jvo.mongodb.net/places?retryWrites=true&w=majority&ssl=true',{ useNewUrlParser: true })
.then(() => {
  app.listen(5000);
})
.catch(err => {
  console.log(err);
});

// mongoose
//   .connect(
//     `mongodb+srv://srikanth:srikanth123@cluster0.yiggz.mongodb.net/places?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch(err => {
//     console.log(err);
//   });

  //app.listen(5000);
