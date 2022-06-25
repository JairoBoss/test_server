require("dotenv").config();
module.exports = {
  url: `mongodb://localhost:27017/${process.env.MONGO_DB}`,
};
