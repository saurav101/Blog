import mongoose from "mongoose";

const connectMongo = async () => {
  await mongoose.connect("mongodb://localhost:27017/mern-blog");
};
export default connectMongo;
