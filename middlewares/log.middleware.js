import morgan from "morgan";
import logger from "./utils/logger.js";
// create a Morgan middleware instance
export const morganMiddleware = morgan("combined", {
  // specify a function for skipping requests without errors
  skip: (req, res) => res.statusCode < 400,
  // specify a stream for requests logging
  stream: {
    write: (msg) => logger.http(msg),
  },
});
