import 'reflect-metadata';
import { createConnection } from 'typeorm';
import client from './client';

client()
	.then(() => {
		createConnection().then(async (connection) => {
			console.log(`>> Database connection (${connection.name}) established!`);
		});
	})
	.catch((err) => console.error(err));
