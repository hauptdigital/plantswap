const { MongoClient } = require('mongodb');

let client: any = null;
let database: any = null;

export async function initDatabase(url: string | undefined, databaseName: string | undefined) {
    client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(databaseName);
}

export async function closeDatabase() {
    await client.close();
}
