import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 8080

const schema = new mongoose.Schema({ name:'string', difficulty:'string'});
const Trail = mongoose.model('Trail', schema);

app.use( express.static( "public" ) );
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  await Trail.create({name: req.params.name, difficulty: 'easy'})
  res.render('index');
})

app.get('/trail', (req, res) => {
    res.render('trail')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected'))
  .catch((error) => console.error('DB connection error', error));
});