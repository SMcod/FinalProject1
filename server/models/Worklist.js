let mongoose = require("mongoose");

// create a model class
let WorklistModel = mongoose.Schema(
  {
    Name: String,
    Priority: mongoose.Schema.Types.Mixed,
    Notes: mongoose.Schema.Types.Mixed,
  },
  {
    collection: "Worklist",
  }
);
module.exports = mongoose.model("Worklist", WorklistModel);
