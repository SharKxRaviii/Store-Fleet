import server from "./app.js";
import dotenv from "dotenv";
import path from "path";
const configPath = path.resolve("backend", "config", "uat.env");
dotenv.config({ path: configPath });
import { connectDB } from "./config/db.js";

server.listen(process.env.PORT, async (err) => {
  if (err) {
    console.log(`server failed with error ${err}`);
  } else {
    await connectDB();
    console.log(`server is running at http://localhost:${process.env.PORT}`);
  }
});
