export class FlagRetriever {
  private fetchFn: (type: string) => Promise<string>;

  constructor(fetchFn: (type: string) => Promise<string>) {
    this.fetchFn = fetchFn;
  }

  async fetchFlag(): Promise<string> {
    const response = await this.fetchFn("flag");

    return response;
  }
}
