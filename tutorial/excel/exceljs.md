# exceljs

## Write File

### package installation

```bash
npm i exceljs
```

###

### Create WorkBook

- Import

```js
import ExcelJS from "exceljs";
```

- Create A Workbook

```js
const workbook = new ExcelJS.Workbook();

workbook.creator = "Me";
workbook.lastModifiedBy = "Tutorials";
workbook.created = new Date(2025, 1, 24);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2025, 1, 24);
```

- Create sheet

```js
const sheet = workbook.addWorksheet("My First Sheet");
```

- Add rows

```js
const firstHeader = ["Main header", "Header 1", "", "Header 2", ""];
const secondHeader = [
  "",
  "Header 1 A",
  "Header 1 B",
  "Header 2 A",
  "Header 2 B",
];
sheet.addRow(firstHeader);
sheet.addRow(secondHeader);
```

- Merge cell

```js
sheet.mergeCells("A1:A2");
```

- Set AutoSize

```js
sheet.columns.forEach((column) => {
  let maxColumnLength = 0;

  column.eachCell({ includeEmpty: true }, (cell) => {
    const cellValue = cell.value || "";
    maxColumnLength = Math.max(maxColumnLength, cellValue.toString().length);
  });

  column.width = maxColumnLength;
});
```

- style the cell

```js
const cellList = ["A1", "B1", "D1", "B2", "C2", "D2", "E2"];
cellList.forEach((element) => {
  const cell = sheet.getCell(element);
  cell.alignment = { horizontal: "center", vertical: "middle" };
  cell.font = { bold: true };
  cell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FEFF00" },
  };
  cell.border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };
});
```

- Add multiple rows

```js
const rows = [
  [5, "Bob", new Date(), "Mangesh", new Date()],
  [6, "Manish", new Date(), "Kalpak", new Date()],
  [7, "Rohit", new Date(), "Rohan", new Date()],
];
sheet.addRows(rows);
```

- Get/Set single cell value

```js
let cellA3 = sheet.getCell("A3");
console.log(cellA3.value);
let cellF3 = sheet.getCell("F3");
cellF3.value = "Value set by single cell";
```

- Get single/Multiple Rows

```js
sheet.eachRow(function (row, rowNumber) {
  console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
});
const row5 = sheet.getRow(5);
console.log("row5", row5.values);
```

- Create a new sheet within same workbook

```js
const sheet2 = workbook.addWorksheet("My Second Sheet");

sheet2.addRow(firstHeader);
sheet2.addRow(secondHeader);
sheet2.mergeCells("A1:A2");
sheet2.mergeCells("B1:C1");
sheet2.mergeCells("D1:E1");
```

- Write to file

```js
workbook.xlsx.writeFile("assets/output.xlsx");
```

## Read Data

```js
const workbookXLSX = new ExcelJS.Workbook();
const xlsxData = await workbookXLSX.xlsx.readFile("assets/output.xlsx");
const worksheet = xlsxData.getWorksheet(1); // Get the first worksheet

const data = [];
worksheet.eachRow((row, rowIndex) => {
  if (rowIndex > 1) {
    // Skip the header row (assuming the first row is a header)
    const rowData = [];
    row.eachCell((cell, cellIndex) => {
      rowData.push(cell.value);
    });
    data.push(rowData);
  }
});

return [data];
```
