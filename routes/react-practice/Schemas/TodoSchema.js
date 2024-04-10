import { default as mongoose } from "mongoose";
import moongose from "mongoose";
const { Schema } = moongose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
TodoSchema.set("timestamps", true);
const TodoModel = mongoose.model("todos", TodoSchema);
export default TodoModel;
