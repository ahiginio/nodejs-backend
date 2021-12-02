import mongoose from 'mongoose';
import {config} from 'dotenv'
config()
/* -------------------- Configuración de la base de datos ------------------- */

mongoose
  .connect(
    process.env.NODE_ENV === "development"
      ? process.env.MONGO_DB_URI_DEV
      : process.env.MONGO_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conexion exitosa a db");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
