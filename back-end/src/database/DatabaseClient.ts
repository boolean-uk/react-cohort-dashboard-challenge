import { log } from "console";
import { MongoClient, ServerApiVersion } from "mongodb";
import { DB_COLLECTIONS } from "./collections.enum";
import { USER_SCHEMA } from "./models/user.schema";
import { PUBLIC_USER_DATA_SCHEMA } from "./models/public_user_data.schema";
import auth from "../router/auth/auth.crypto";
import { CREDENTIALS_SCHEMA } from "./models/credentials.schema";
import { POST_SCHEMA } from "./models/post.schema";

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

	//== CONNECTION
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
	//== INSERT
	async insert(collection: DB_COLLECTIONS, data: any) {
		return await this.getCollection(collection).insertOne(data);
	}
	async insertUser(user: USER_SCHEMA, password: string) {
		try {
			//== Create new user
			await this.insert(DB_COLLECTIONS.USERS, user);

			//== Create public data
			const { email: privateEmail, ...publicUserData } =
				(await this.findOne(DB_COLLECTIONS.USERS, {
					...user,
				})) as PUBLIC_USER_DATA_SCHEMA;

			//insert to public data
			await this.insert(DB_COLLECTIONS.PUBLIC_USER_DATA, publicUserData);
			//== Create new auth doc
			const hash = await auth.encryptString(password);
			const credentials: CREDENTIALS_SCHEMA = { email: user.email, hash };
			//insert to auth
			await this.insert(DB_COLLECTIONS.AUTH, credentials);
			return {
				message: "Created new user",
				status: 200,
			};
		} catch (error) {
			return {
				message: "Error while inserting data to the database",
				status: 502,
			};
		}
	}

	async insertPost(post: POST_SCHEMA) {
		return await this.insert(DB_COLLECTIONS.POSTS, post);
	}

	//== DELETE
	async delete(collection: DB_COLLECTIONS, filter: any) {
		await this.getCollection(collection).findOneAndDelete(filter);
	}
	async deletePost(post: POST_SCHEMA) {
		return await this.delete(DB_COLLECTIONS.POSTS, post);
	}
	//== UPDATE
	async update(collection: DB_COLLECTIONS, filter: any, data: any) {
		await this.getCollection(collection).findOneAndReplace(filter, data);
	}
	//== SEARCH
	find(collection: string, filters: any) {
		return this.getCollection(collection).find(filters);
	}
	async findOne(collection: string, filters: any) {
		return await this.getCollection(collection).findOne(filters);
	}

	async has(collection: string, filters: any) {
		return (await this.findOne(collection, filters)) ? true : false;
	}

	// ==
	private getCollection(collection: string) {
		return this._client.db(this._database).collection(collection);
	}
}
