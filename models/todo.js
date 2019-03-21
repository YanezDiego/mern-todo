const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The Todo Text Field Is Required']
    }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;