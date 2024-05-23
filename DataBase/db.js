const mongoose = require('mongoose');
const Password = '2HkkLArhqbP4RqoR'
const dbURL =`mongodb+srv://kavinprasad2948:${Password}@hallbooking.lokd4tl.mongodb.net/`

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
