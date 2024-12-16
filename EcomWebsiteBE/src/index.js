import http from "http";
import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./db/db.connect.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on PORT : ${PORT}`);
  });
});