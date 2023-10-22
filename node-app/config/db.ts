import mongoose from 'mongoose';
const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    })
    console.log('Database connected !!!')
  } catch (error) {
    console.log(`Connection failed !!! ${error}`)
  }
}

export default dbConnection;