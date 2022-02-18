/* -------------------------------------------------------------------------- */
/*                       CoderHouse Pre-entrega 3 Final                       */
/* -------------------------------------------------------------------------- */
import emoji from 'node-emoji'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import cluster from 'cluster'
import os from 'os'
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import WebSocket, { WebSocketServer } from "ws";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config()
import UserRouter from "./routes/user.route.js";
import CartRouter from "./routes/cart.route.js";
import ProductRouter from "./routes/product.route.js";
import CategoryRouter from "./routes/category.route.js";
import CheckoutRouter from "./routes/checkout.route.js";
import MensajesRouter from "./routes/mensajes.route.js";
import "./utils/db.js"
import logger from "./utils/logger.js";
import auth from "./middlewares/auth.middleware.js";
import * as mensajesController from "./controllers/mensajes.controller.js";
import Mensaje from './models/mensajes.model.js'
const nCpus = os.cpus().length
if (cluster.isMaster) {
  console.log(`${emoji.get(":zap:")}Master PID ${process.pid} is running`);
  for (let i = 0; i < nCpus; i++) {
    cluster.fork()    
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${emoji.get(":zap:")} Worker PID ${worker.process.pid} died`);
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
  app.use('/api/',UserRouter);
  app.use("/api/", ProductRouter);
  app.use("/api/", CategoryRouter);
  app.use("/api/", CartRouter);
  app.use("/api/", CheckoutRouter);
  app.use("/api/", MensajesRouter);
/*   app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  }); */
  app.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
  });
  // Inicio el servidor
  const PORT = process.env.PORT || 8080;
  const httpServer = createServer(app);
   const io = new Server(httpServer, {
    cors: {
      origin: "*",
     

     
    },

  });
 
  io.on("connection", async (socket) => {
    const mensajes = await Mensaje.find({}).then((mensajes) => { return mensajes})
    console.log(`${emoji.get(":zap:")} Websocket conectado`);
    socket.emit("mensajes", mensajes);
    socket.on("update", async (mensaje) => {
      const message = new Mensaje(mensaje);
      message.save().then((response) => { return response});
      socket.emit("mensajes", mensajes);
    });
     socket.on("disconnect", () => {
      console.log("Client disconnected");
     });
  }); 
 /* io.on("connection", (socket) => {
   console.log(`connect ${socket.id}`);

   socket.on("disconnect", (reason) => {
     console.log(`disconnect ${socket.id} due to ${reason}`);
   });
 }); */
  app.listen(PORT, () => {
    console.log(`${emoji.get("computer")}Server is running on port ${PORT}.`);
  });
  httpServer.listen(3001)
}