import mongoose from 'mongoose';
import dotenv from 'dotenv';
import './models/Video';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// eslint-disable-next-line no-console
const handleOpen = () => console.log('Connected to DB');
// eslint-disable-next-line no-console
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once('open', handleOpen);
db.on('error', handleError);
