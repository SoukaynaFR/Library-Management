const express = require("express");
const router = express.Router();

const Book = require("../models/book.model.js");
const { generateCrudMethods } = require("../services/index.js");
const bookCrud = generateCrudMethods(Book);


const {
  validateDbId,
  raiseRecord404Error,
} = require("../middlewares/index.js");


//get all books
router.get("/", (req, res, next) => {
  bookCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
});

// get a book by id
router.get("/:id", validateDbId, (req, res , next) => {
  bookCrud
    .getById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })

    .catch((err) => next(err));
});


// create a book
router.post("/add-book", (req, res) => {
  bookCrud
    .create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
});

//update a book
router.put("/update-book/:id", validateDbId, 
  (req, res) => {bookCrud.update(req.params.id,req.body)
    .then(data => {
      if(data) res.send(data)
        else raiseRecord404Error(req,res)
    })
        .catch((err) => next(err))


  });

router.delete("/delete-book/:id", validateDbId, (req,res) => {
  bookCrud.delete(req.params.id)
   .then (data => {
    if(data) res.send(data)
      else raiseRecord404Error(req,res)
   } )
   .catch(err => next(err))
})
module.exports = router;
