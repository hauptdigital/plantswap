const { MongoClient } = require('mongodb');

let client: any = null;
let database: any = null;

async function initDatabase(url: string, databaseName: string) {
    client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(databaseName);
}

async function closeDatabase() {
    await client.close();
}

exports.initDatabase = initDatabase;
exports.closeDatabase = closeDatabase;
