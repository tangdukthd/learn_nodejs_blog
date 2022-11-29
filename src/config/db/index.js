const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/learn_nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('connect successfully!!');
    } catch {
        console.log('Connect failure');
    }
}

module.exports = { connect };
