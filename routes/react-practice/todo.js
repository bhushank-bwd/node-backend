import express from "express";
import { getDataByConditions, insertRecord } from "../../database/CRUD.js";
import TodoModel from "./Schemas/TodoSchema.js";
import { body, validationResult } from "express-validator";
const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
  let limit = req.body.limit || 10;
  let offset = req.body.offset || 0;
  let whereCondition = {};
  if (req.body.search && req.body.search.length > 0) {
    whereCondition = {
      title: { $regex: new RegExp(`.*${req.body.search}.*`, "i") },
    };
  }
  let todos = await getDataByConditions(
    TodoModel,
    "title description updatedAt",
    whereCondition,
    { updatedAt: -1 },
    limit,
    offset
  );
  if (todos.length > 0) {
    res.json({ status: true, message: "Data Available", data: todos });
  } else {
    res.json({ status: false, message: "No data available" });
  }
});
todoRouter.post(
  "/create",
  [
    body("title")
      .notEmpty()
      .withMessage("Enter a username")
      .isLength({ min: 1 })
      .withMessage("Enter a username(min 1 chars)"),
  ],
  async (req, res) => {
    let status = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: status,
        errors: errors.array(),
        message: "Validation errors",
      });
    }
    try {
      const todo = await insertRecord(TodoModel, {
        title: req.body.title,
        description: req.body.description || "",
      });
      if (todo) {
        res.json({ status: true, message: "Data inserted" });
      } else {
        res.json({ status: false, message: "Data not inserted" });
      }
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
);
export default todoRouter;
