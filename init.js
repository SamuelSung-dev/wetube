import './db';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT } = process.env;
// eslint-disable-next-line no-console
const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
