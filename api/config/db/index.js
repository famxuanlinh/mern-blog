import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function db() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected mongoose successfully");
  } catch (err) {
    console.log(err);
    console.log("Connected mongoose failed");
  }
}

export default db;
