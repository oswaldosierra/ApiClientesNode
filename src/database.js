const mongoose = require('mongoose');
const URI = 'mongodb://localhost/clientes';
mongoose.connect(URI)
    .then(db => console.log('db connect'))
    .catch(err => console.log(err));

module.exports = mongoose;