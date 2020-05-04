import express from 'express';
import morgan from 'morgan';


class App {
  createExpressApp() {
    const app = express();
    app.use(express.json());
    app.get(
      '/',
        (req, res) => res.status(200).json({ message: 'welcome to the restaurant booking api'})
      )


    if (app.get('env') === 'development') {
      app.use(morgan('dev'));
    }

    return app;
  }

  start(config, logger) {
    const app = this.createExpressApp();

    // create app server and start it
    app.listen(config.port, () => {
      logger.info(`app running on port ${config.port}`);
    });
  }
}

const app = new App();
export default app;