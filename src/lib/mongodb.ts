import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGO_DB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_DB_URI environment variable inside .env');
}

// MongoDB connection details
const options = {
  maxPoolSize: 10,
  minPoolSize: 2,
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 45000,
};

// Create MongoDB client
const client = new MongoClient(MONGODB_URI, options);

// Get database reference
const db = client.db();

// Export MongoDB client and database
export const mongodb = {
  client,
  db
};

// Handle graceful shutdown for MongoDB connection
if (typeof window === 'undefined') {
  process.on('SIGINT', async () => {
    try {
      await client.close();
      console.log('MongoDB connection closed');
      process.exit(0);
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
      process.exit(1);
    }
  });

  process.on('SIGTERM', async () => {
    try {
      await client.close();
      console.log('MongoDB connection closed');
      process.exit(0);
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
      process.exit(1);
    }
  });
}
