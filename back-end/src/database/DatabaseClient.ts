import { log } from "console";
import { MongoClient, ServerApiVersion } from "mongodb";

/**
 * A wrapper for working with any database
 * Currently set up with mongoDB only
 */
export default class DatabaseClient {
	private _client: MongoClient;
	private _database: string;

	constructor(uri: string, db: string) {
		this._client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
		this._database = db;
	}

	getCollection(collection: string) {
		return this._client.db(this._database).collection(collection);
	}

	find(collection: string, filters: any) {
		return this.getCollection(collection).find(filters);
	}

	async has(collection: string, filters: any) {
		if (await this.find(collection, filters).hasNext()) return true;
		else return false;
	}

	async connect() {
		this._client.connect();
		try {
			await this._client.db(this._database).command({ ping: 1 });
		} catch (error) {
			console.log(error); //FIX: This error should be handled
			return false;
		}
		return true;
	}

	async close() {
		await this._client.close();
	}
}
