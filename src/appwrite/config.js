import conf from "@/conf/config";
import { Client, Account } from "appwrite";

const appwriteClient = new Client();
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  constructor() {
    this.client = appwriteClient;
    this.account = account;
  }
  async loginWithGoogle() {
    const oauth = await this.client.account.createOAuth2Session(
      "google",
      `${window.location.origin}/auth/callback`
    );
    window.location.href = oauth.url;
  }
  async loginWithGithub() {
    const oauth = await this.client.account.createOAuth2Session(
      "github",
      `${window.location.origin}/auth/callback`
    );
    window.location.href = oauth.url;
  }
  async getAccount() {
    return await this.account.get();
  }
  async getAccountById(id) {
    return await this.account.get(id);
  }

  async getCurrUser() {
    try {
      const account = await this.account.get();
      return account;
    } catch (e) {
      if (e.code === 401) {
        window.location.href = "/login";
      }
    }
  }

  async logout() {
    return await this.account.deleteSession("current");
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
