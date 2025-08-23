
const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://soukayna:%24ik%2EQiHs4vZPM7F@cluster0.emca8bl.mongodb.net/library_db?retryWrites=true&w=majority&appName=Cluster0'

module.exports = () => {
    return mongoose.connect(dbUri)
}
