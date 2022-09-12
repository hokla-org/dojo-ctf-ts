import axios from "axios";

export class APIService {
  private static instance: APIService | null = null;
  private token: string | null = null;

  public static getInstance() {
    if (APIService.instance === null) {
      APIService.instance = new APIService();
    }

    return APIService.instance;
  }

  init(token: string) {
    this.token = token;
  }

  async fetch(type: string): Promise<string> {
    if (process.env.API_ENDPOINT === undefined)
      throw new Error("Environment variable API_ENDPOINT not defined.");

    const response = await axios.get<string>(
      `${process.env.API_ENDPOINT}${type}`,
      {
        headers: {
          token: this.token ?? "",
        },
      }
    );

    return response.data;
  }
}
