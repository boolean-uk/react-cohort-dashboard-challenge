import { MongoClient, ServerApiVersion } from "mongodb";
import auth from "../router/auth/auth.crypto";
import { DB_COLLECTIONS } from "./collections.enum";
import { DatabaseResponse } from "./database.response.type";
import { CREDENTIALS_SCHEMA } from "./models/credentials.schema";
import { POST_SCHEMA } from "./models/post.schema";
import { PUBLIC_USER_DATA_SCHEMA } from "./models/public_user_data.schema";
import { USER_SCHEMA } from "./models/user.schema";

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
	async connect(): Promise<DatabaseResponse> {
		this._client.connect();
		try {
			await this._client.db(this._database).command({ ping: 1 });
			return { message: "Connected to " + this._database, status: 200 };
		} catch (error) {
			return {
				error,
				message: "Can't connect to " + this._database,
				status: 502,
			};
		}
	}

	async close() {
		return await this._client.close();
	}
	//== INSERT
	/**
	 * Default method for inserting data into a collection.
	 * @throws -> Database errors are handled here and a DatabaseResponse is returned
	 * @returns DatabaseResponse
	 */
	private async insert(
		collection: DB_COLLECTIONS,
		data: any
	): Promise<DatabaseResponse> {
		try {
			const db_response = await this.getCollection(collection).insertOne(
				data
			);

			if (!db_response.acknowledged) throw new Error();

			return { message: "Inserted successfuly", status: 200 };
		} catch (error) {
			return {
				error: error,
				message: `Error while inserting user into ${collection} collection from ${this._database} database`,
				status: 502,
			};
		}
	}
	async insertUser(user: USER_SCHEMA, password: string) {
		let db_response;
		//== Create new user
		db_response = await this.insert(DB_COLLECTIONS.USERS, user);
		if (db_response?.error) return db_response;

		//== Create public data
		const { email: privateEmail, ...publicUserData } = (await this.findOne(
			DB_COLLECTIONS.USERS,
			{
				...user,
			}
		)) as PUBLIC_USER_DATA_SCHEMA;

		//insert to public data
		db_response = await this.insert(
			DB_COLLECTIONS.PUBLIC_USER_DATA,
			publicUserData
		);

		if (db_response?.error) return db_response;

		//== Create new auth doc
		const hash = await auth.encryptString(password);
		const credentials: CREDENTIALS_SCHEMA = { email: user.email, hash };
		//insert to auth
		db_response = await this.insert(DB_COLLECTIONS.AUTH, credentials);
		if (db_response?.error) return db_response;

		//All went well
		return {
			message: "Created new user",
			status: 200,
		};
	}
	async insertBlacklistCookie(cookie: string) {
		return await this.insert(DB_COLLECTIONS.BLACKLISTED_COOKIES, {
			cookie,
		});
	}
	async insertPost(post: POST_SCHEMA) {
		return await this.insert(DB_COLLECTIONS.POSTS, post);
	}

	//== DELETE
	/**
	 * Default method for deleting data from a collection.
	 * @throws
	 */
	private async delete(
		collection: DB_COLLECTIONS,
		filters: any
	): Promise<DatabaseResponse> {
		try {
			const db_response = await this.getCollection(collection).deleteOne(
				filters
			);

			if (!db_response.acknowledged) {
				throw new Error();
			}
			if (db_response.deletedCount === 0)
				return {
					message: `Could not find resource to delete from ${collection} collection from ${this._database}`,
					status: 404,
				};

			return { message: "Deleted successfully", status: 200 };
		} catch (error) {
			return {
				error,
				message: `Could not delete requested data: ${filters} from ${collection} collection from ${this._database}`,
				status: 502,
			};
		}
	}
	async deletePost(filters: any) {
		return await this.delete(DB_COLLECTIONS.POSTS, filters);
	}
	//== UPDATE
	/**
	 * Default method for updating data from a collection.
	 * @throws
	 */
	private async update(
		collection: DB_COLLECTIONS,
		filter: any,
		data: any
	): Promise<DatabaseResponse> {
		try {
			const { _id, ...documentData } = data;
			const db_response = await this.getCollection(collection).replaceOne(
				filter,
				documentData
			);

			if (!db_response.acknowledged) {
				throw new Error();
			}
			return { message: "Updated successfully", status: 200 };
		} catch (error) {
			return {
				error,
				message: `Could not update requested data: ${data} from ${collection} collection from ${this._database}`,
				status: 502,
			};
		}
	}

	async updatePost(filter: any, post: POST_SCHEMA) {
		return await this.update(DB_COLLECTIONS.POSTS, filter, post);
	}
	//== SEARCH

	//= Generic
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
