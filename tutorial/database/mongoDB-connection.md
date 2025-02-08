# Mongo DB Connection

## Package Installation

```bash
npm i mongoose
```

## Connection

- Import

```js
import mongoose from "mongoose";
```

- Connection string

```bash
LOCAL_DB_CONNECTION_STRING=mongodb://localhost:27017/DB-NAME
ATLAS_DB_CONNECTION_STRING=mongodb+srv://<USERNAME>:<PASSWORD>@<cluster-URL-From-mongodb.net>/<DB-NAME>
```

- Connection

```js
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
```
