import { promises as fs } from "fs"; // Using fs.promises for async/await

export const readFileContent = async (filePath) => {
  try {
    const text = await fs.readFile(filePath, "utf-8"); // Read file with await
    return text;
  } catch (err) {
    console.log(err);
    return false;
  }
};
