import * as mongodb from 'mongodb';

let client: any = null;
let database: any = null;

export async function initDatabase(url: string | undefined, databaseName: string | undefined) {
    client = new mongodb.MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(databaseName);
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
