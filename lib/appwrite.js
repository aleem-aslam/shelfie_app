import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68e01bf20008158f6bf8") // Your Project ID
  .setPlatform("com.outlookbuzz/shalfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
