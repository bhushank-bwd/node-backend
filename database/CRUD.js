export const insertRecord = async (schema, insertObject) => {
  try {
    let user = await schema.create(insertObject);
    return user.id;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export const deleteRecord = async (schema, id) => {
  try {
    const deletedDocument = await schema.findByIdAndDelete(id);

    if (deletedDocument) {
      console.log(`Deleted document with ID: ${id}`);
      return true;
    } else {
      console.log(`No document found with ID: ${id}`);
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export const updateRecord = async (schema, updateData, id) => {
  try {
    const updatedDocument = await schema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (updatedDocument) {
      console.log(`Updated document with ID: ${id}`);
      return true;
    } else {
      console.log(`No document found with ID: ${id}`);
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export const getDataByConditions = async (
  schema,
  select = "_id updatedAt",
  whereConditions = {},
  sortCriteria = { updatedAt: -1 },
  limit = 10,
  offset = 0
) => {
  try {
    const query = whereConditions ? { ...whereConditions } : {}; // Build query object
    // whereCondition  = {phoneno: { $lte: 45464 }},
    // whereCondition  = {name: { $regex: /.*ohn.*/i } },
    const options = {};

    const documents = await schema
      .find(query, options, { select: select })
      .sort(sortCriteria)
      .limit(limit)
      .skip(offset);

    return documents; // Return the retrieved documents
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return []; // Return empty array on error
  }
};
