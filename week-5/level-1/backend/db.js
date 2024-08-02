const mongoose = require("mongoose");
const { mongoURL } = require('./.env')
mongoose.connect(mongoURL);

const Card_Schema = mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  socials: [String],
});

const Admin_Schema = mongoose.Schema({
  username: String,
  password: String,
});

const Card = mongoose.model("Card", Card_Schema);
const Admin = mongoose.model("Admin", Admin_Schema);

module.exports = {
  Card,
  Admin,
};
