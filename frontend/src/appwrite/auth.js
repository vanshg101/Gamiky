    import conf from '../conf/conf.js';
    import { Client, Account, ID } from "appwrite";


    export class AuthService {
        client = new Client();
        account;

        constructor() {
            console.log("Appwrite URL:", conf.appwriteUrl);
            console.log("Appwrite Project ID:", conf.appwriteProjectId);
            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
        }

        async createAccount({email, password, name}) {
            try {
                console.log("Creating account with:", { email, name }); // Don't log password
                const userAccount = await this.account.create(ID.unique(), email, password, name);
                console.log("Account created:", userAccount);
                if (userAccount) {
                    return this.login({email, password});
                } else {
                    return userAccount;
                }
            } catch (error) {
                console.error("Error in createAccount:", error);
                throw error;
            }
        }

        async login({email, password}) {
            try {
                return await this.account.createEmailPasswordSession(email, password);
            } catch (error) {
                throw error;
            }
        }

        async getCurrentUser() {
            try {
                return await this.account.get();
            } catch (error) {
                console.log("Appwrite serive :: getCurrentUser :: error", error);
            }

            return null;
        }

        async logout() {
            try {
                await this.account.deleteSessions();
            } catch (error) {
                console.log("Appwrite serive :: logout :: error", error);
            }
        }
    }

    const authService = new AuthService();

    export default authService
