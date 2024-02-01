const mongoose = require('mongoose')

const toDOSchema = new mongoose.Schema({
    toDo: {
        type:String,
        reqiured: true
    }
})

module.exports = mongoose.model("ToDo", toDOSchema);