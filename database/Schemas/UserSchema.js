import { default as mongoose } from "mongoose";
import moongose from "mongoose";
const { Schema } = moongose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneno: {
    type: Number,
  },
});
UserSchema.set("timestamps", true);
const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
