/* -------------------------------------------------------------------------- */
/*                       CoderHouse Pre-entrega 3 Final                       */
/* -------------------------------------------------------------------------- */
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import UserRouter from './routes/user.route.js'
import cluster from 'cluster'
import os from 'os'
import logger from "./utils/logger.js";
dotenv.config()
import "./utils/db.js"

const nCpus = os.cpus().length
if (cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`)
  for (let i = 0; i < nCpus; i++) {
    cluster.fork()    
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`)
    cluster.fork()    
  })
} else {
  const app = express()
  // Habilito el parseo de las peticiones en json
  app.use(bodyParser.json());
  // Habilito el parseo de x-url-encoded-form de manera extendida
  app.use(bodyParser.urlencoded({ extended: false }));
  const whitelist = process.env.WHITELISTED_DOMAINS
    ? process.env.WHITELISTED_DOMAINS.split(",")
    : [];
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  };
  app.use(cors());
  app.use(morgan("dev"))
  const morganMiddleware = morgan("combined", {
    // specify a function for skipping requests without errors
    skip: (req, res) => res.statusCode < 400,
    // specify a stream for requests logging
    stream: {
      write: (msg) => logger.http(msg),
    },
  });
  app.use(morganMiddleware);
  /* --------------------------------- Routing -------------------------------- */
  app.use(UserRouter);
  // Inicio el servidor
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  })
}