import xlsx from "xlsx";

export const readXLSXData = async (xlsxFilePath, sheetNo = 0) => {
  try {
    const workbook = await xlsx.readFile(xlsxFilePath, { type: "binary" });
    const sheetName = workbook.SheetNames[sheetNo]; // Access first worksheet
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    return jsonData;
  } catch (err) {
    console.error(err);
    return false;
  }
};
