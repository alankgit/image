const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:pass@cluster0.7f1pglb.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
