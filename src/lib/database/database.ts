import mongoose = require('mongoose');

let client: any = null;
let database: any = null;

export async function initDatabase(url: string) {
    client = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    database = mongoose.connection;
}

export async function getCollection(collectionName: string) {
    if (!database) {
        throw new Error('You have to initialize the database first');
    }
    return database.collection(collectionName);
}

export async function closeDatabase() {
    await client.close();
}
