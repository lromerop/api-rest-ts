import "dotenv/config";
import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
  mongoose
    .connect(
      <string>process.env.DB_URL,
      <object>{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database starts successfully");
    })
    .catch((error) => {
      console.log("Error when starting database: \n", error);
    });
}

export default dbConnect;
