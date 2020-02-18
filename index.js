import express from 'express';
import routes from './src/routes/routes';

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res) => {
    res.send('message');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});