const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("can't connect", error);
  }
};
// export
module.exports = connectDB;

// username : hatem777
// password : UDSoTIWhbccENsGe
