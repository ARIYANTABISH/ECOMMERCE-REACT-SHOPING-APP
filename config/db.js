const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongoDB database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MogoDB ${error}`);
  }
};

 module.exports= connectDB;
