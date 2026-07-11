import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongodb } from "./mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(mongodb.db, {
    client: mongodb.client
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL
});
