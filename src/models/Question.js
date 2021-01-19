const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  description: String,
  idQuestion: Number,
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model("Question", QuestionSchema);
