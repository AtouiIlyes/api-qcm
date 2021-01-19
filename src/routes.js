const express = require("express");
const router = express.Router();
const Question = require("./models/Question");
const User = require("./models/Question");

// get all qcm questions
router.get("/user/login/:login:passwd", async (req, res) => {
  try {
    const login = req.params.login;
    const passwd = req.params.passwd;

    const user = await User.findOne({ login });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    } else {
      if (user.passwd.equals(passwd)) {
        return res.status(200).json({ message: "logged in" });
      } else {
        return res.status(403).json({ message: "wrong credentials" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// get all qcm questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// get one qcm question
router.get("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const question = await Question.findOne({ _id });
    if (!question) {
      return res.status(404).json({ message: "question not found" });
    } else {
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// get one qcm question
router.get("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const question = await Question.findOne({ _id });
    if (!question) {
      return res.status(404).json({});
    } else {
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// get user total score
router.get("/user/score/:login", async (req, res) => {
  const login = req.params.login;

  const user = await User.findOne({ login });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    return res.status(200).json({ score: user.score });
  }
});

// test
router.get("/", (req, res) => {
  res.send("QCM");
});

module.exports = router;
