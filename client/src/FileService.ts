import { promises } from "fs";

export class FileService {
  private static instance: FileService | null = null;

  public static getInstance() {
    if (FileService.instance === null) {
      FileService.instance = new FileService();
    }

    return FileService.instance;
  }

  async fetch(type: string): Promise<string> {
    const content = await promises.readFile(`.${type}`, "utf8");
    return content;
  }
}
