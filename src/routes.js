const app = require('./app')
const express = require('express')
const router = express.Router()
const Book = require('./models/book.models')


router.get('/books', async (req, res) => {
    const allBooks = await Book.find({})
    res.json({"message": "Data fetched successfully", data : allBooks})
})

router.post('/newbook', async(req, res) => {
    const newBook = new Book(req.body)
    const savedBook = await newBook.save()
    res.json(savedBook)
})

module.exports = router