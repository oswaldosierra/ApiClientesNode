const mongoose = require('mongoose');
const { Schema } = mongoose;


const ClienteSchema = new Schema({
    nombres: {
        type: String, required: true
    },
    apellidos: {
        type: String, required: true
    }
});

module.exports = mongoose.model('cliente', ClienteSchema);