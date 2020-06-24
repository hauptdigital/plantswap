const mongoose = require('mongoose');

let client = null;
let database = null;

async function initDatabase(url) {
    client = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    });

    database = mongoose.connection;
}

async function getCollection(collectionName) {
    if (!database) {
        throw new Error('You have to initialize the database first');
    }
    return database.collection(collectionName);
}

async function closeDatabase() {
    await client.close();
}

module.exports.initDatabase = initDatabase;
module.exports.getCollection = getCollection;
module.exports.closeDatabase = closeDatabase;
