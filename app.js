import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './src/routes/index.js';
import deviceRouter from './src/controllers/device.js'

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.use('/', routes.home);
app.use('/devices', routes.devices);



app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);