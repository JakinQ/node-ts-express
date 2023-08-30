import express from 'express';
// import { getRouter } from './routes/router';
// import { config } from './config';

const main = async () => {
    const app = express();
    const port = 8091;

    // app.use(compression());
    // app.use('/static', express.static(config.staticFilePath));
    app.use('/api', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(process.env.PORT || port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
};

main();