const ObjectId = require("mongoose").Types.ObjectId;

const validateDbId = (req, res, next) => {
  if (ObjectId.isValid(req.params.id) == false)
    res.status(400).json({
      error: "given id " + req.params.id + " is not valid ",
    });
  else next();
};

const raiseRecord404Error = (req, res) => {
  res.status(401).json({
    error: "No book found with given _id : " + req.params.id,
  });
};

// const errorHandler = (error , req , res , next) => {
//     res.status(500).json({ error })
// }

const errorHandler = (err, req, res, next) => {
  console.error("Error caught by middleware:", err); // log full error
  res.status(500).json({ error: err.message || "Something went wrong" });
};

module.exports = {
  validateDbId,
  raiseRecord404Error,
  errorHandler,
};
