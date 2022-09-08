import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },
    email: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("Client", ClientSchema);
