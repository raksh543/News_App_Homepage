const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
    category:{
        type: String,
        required: true,
        trim: true
    },
    heading: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
})

mongoose.model('card', cardSchema);