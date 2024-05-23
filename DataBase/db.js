const mongoose = require('mongoose');
const Password = '1U0wxh7Qy2LDWbwg'
const dbURL =`mongodb+srv://kumarpillaibh:${Password}@kavinprasad.cjkbfqc.mongodb.net/`

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
