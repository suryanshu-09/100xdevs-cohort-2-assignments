const { Router } = require("express");
const { auth_middleware } = require("./middleware");
const { Admin, Card } = require("./db");
const { SECRET_KEY } = require("./.env");
const router = Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");

const Card_schema = zod.object({
  name: zod.string().min(6),
  description: zod.string().min(6),
  interests: zod.array(zod.string().min(3)).min(1),
  socials: zod.array(zod.string().url()).min(1),
});

const Admin_schema = zod.object({
  username: zod.string().min(6),
  password: zod.string().min(6),
});

router.get("/business-cards", async (req, res) => {
  try {
    const Cards = await Card.find({});
    res.status(200).json({ Cards });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!Admin_schema.safeParse({ username, password }).success) {
    res.status(500).json({ msg: "Invalid data" });
    return;
  }
  const exists = await Admin.findOne({ username });
  if (exists) {
    res.status(500).json({ msg: "User exists" });
    return;
  }
  try {
    await Admin.create({
      username,
      password,
    });
    res.status(200).json({ msg: "User created" });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const Admin_found = await Admin.findOne({ username, password });
  if (Admin_found) {
    const token = jwt.sign({ username }, SECRET_KEY);
    res.status(200).json({ msg: "Signed In", username, token });
  } else {
    res.status(500).json({ msg: "Username or Password incorrect" });
  }
});

router.use(auth_middleware);

router.delete("/business-cards/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Card.deleteOne({ _id: id });
    res.status(200).json({ msg: "Card deleted" });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.get("/business-cards/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Card.findOne({ _id: id });
    res.status(200).json({ card });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const username = req.headers.username;
    await Admin.deleteOne({ username });
    res.status(200).json({ msg: "Deleted Admin" })
  } catch {
    res.status(500).json({ msg: "Database Err" })
  }
});


router.post("/business-cards/add", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const interests = req.body.interests;
  const socials = req.body.socials;

  if (!Card_schema.safeParse({ name, description, interests, socials }).success) {
    res.status(500).json({ msg: "Invalid data" });
    return;
  }
  try {
    const card = await Card.create({ name, description, interests, socials });
    res.status(201).json({ msg: "Card created", id: card._id });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.get("/businesscards/edit", async (req, res) => {
  try {
    const Cards = await Card.find({});
    res.status(200).json({ Cards });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.put("/business-cards/edit", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const interests = req.body.interests;
  const socials = req.body.socials;
  const id = req.body.id;
  if (!Card_schema.safeParse({ name, description, interests, socials }).success) {
    res.status(500).json({ msg: "Invalid data" });
    return;
  }
  try {
    const card = await Card.updateOne({ _id: id }, { name, description, interests, socials });
    res.status(200).json({ msg: "Card Updated" });
  } catch (e) {
    res.status(500).json({ msg: "Database error" });
  }
});

router.use((err, req, res, next) => {
  res.status(404).json({ msg: "Could not find route" });
});

module.exports = router;

