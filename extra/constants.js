export const invoiceText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 20px; /* Adjust margins as needed */
        }
      .invoice-container {
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #ccc;
            padding: 20px;
        }
      .invoice-header {
            text-align: center;
            margin-bottom: 20px;
        }
      .invoice-details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
      .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
      .invoice-table th,.invoice-table td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
      .invoice-total {
            text-align: right;
            font-weight: bold;
        }
      .footer {
          text-align: center;
          margin-top: 20px;
          font-size: smaller;
        }

        @media print {
            body {
                margin: 0; /* Remove margins for printing */
            }
          .invoice-container {
                border: none; /* Remove border for printing */
            }
            /* Other print-specific styles as needed */
        }
    </style>
</head>
<body>

<div class="invoice-container">
    <div class="invoice-header">
        <h1>Invoice</h1>
    </div>

    <div class="invoice-details">
        <div>
            <strong>Invoice No:</strong> INV-2023-10-001<br>
            <strong>Date:</strong> October 26, 2023
        </div>
        <div>
            <strong>Bill to:</strong><br>
            John Doe<br>
            123 Main Street<br>
            Anytown, CA 91234
        </div>
    </div>

    <table class="invoice-table">
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Product A</td>
                <td>2</td>
                <td>$10.00</td>
                <td>$20.00</td>
            </tr>
            <tr>
                <td>Product B</td>
                <td>1</td>
                <td>$20.00</td>
                <td>$20.00</td>
            </tr>
            </tbody>
    </table>

    <div class="invoice-total">
        <strong>Total:</strong> $40.00
    </div>
    <div class="footer">
        Thank you for your business!
    </div>
</div>

</body>
</html>`;
